import 'dotenv/config';
import express from 'express';
import connectDb from './utils/dbConnector.js';
import logger from './utils/logger.js';
import { signupSchema, loginSchema } from './validators/user.js';
import bcrypt from 'bcrypt';
import errorHandler from './utils/errorHandler.js';
import user from './schema/user.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

connectDb().then(() => {
    logger.success("MongoDB Connected Successfully");
}).catch((e) => {
    logger.error("Error while Connecting to Database... " + e);
});

app.post('/signup', errorHandler(async function (req, res) {
    const { error, value } = signupSchema.validate(req.body);
    if (error) throw new Error("Enter the credentials carefully.");

    const newUser = new user(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(newUser.password, salt);
    newUser.password = hashedPass;
    await newUser.save();

    if (process.env.JWT_SECRET) {
        const userToken = jwt.sign({ id: newUser._id, email: newUser.email, username: newUser.username }, process.env.JWT_SECRET, {
            algorithm: 'HS512',
            expiresIn: '7d',
        });

        res.cookie('pvtusrToken', userToken, {
            httpOnly: true,
            expires: new Date(Date.now() + (7 * 24 * 3600 * 1000)),
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Lax'
        });
    }
    return res.json({ message: "User Registered." });
}));


app.post('/login', errorHandler(async function (req, res) {
    const { error, value } = loginSchema.validate(req.body);
    if (error) throw new Error("Enter the credentials correctly");

    const currentUser = await user.findOne({ email: req.body.email });
    if (!currentUser) throw new Error("No Such User exists");

    const samePass = await bcrypt.compare(req.body.password, currentUser.password);
    if (!samePass) throw new Error("Password doesn't Match");

    if (process.env.JWT_SECRET) {
        const userToken = jwt.sign({ id: currentUser._id, email: currentUser.email, username: currentUser.username }, process.env.JWT_SECRET, {
            algorithm: 'HS512',
            expiresIn: '7d',
        });

        res.cookie('pvtusrToken', userToken, {
            httpOnly: true,
            expires: new Date(Date.now() + (7 * 24 * 3600 * 1000)),
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Lax'
        });
    }

    return res.json({ message: "Logged In" });
}));

app.get('/user', errorHandler(function(req, res) {
    const userToken = req.cookies.pvtusrToken;
    if(!userToken) throw new Error("Invalid Session");

    jwt.verify(userToken, process.env.JWT_SECRET, function(err, decoded) {
        if(err) throw new Error(err.message);
        return res.json({ user: decoded });
    });
}));

app.listen(PORT, () => {
    logger.success("Server is Listening to the PORT:", PORT);
});