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

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());

connectDb().then(() => {
    logger.success("MongoDB Connected Successfully");
}).catch((e) => {
    logger.error("Error while Connecting to Database... " + e);
});

app.post('/signup', errorHandler(async function(req, res) {
    const { error, value } = signupSchema.validate(req.body);
    const newUser = new user(req.body);

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(newUser.password, salt);
    newUser.password = hashedPass;

    await newUser.save();
    return res.json({ message: "User Registered." });
}));


app.post('/login', errorHandler(async function(req, res) {
    const { error, value } = loginSchema.validate(req.body);
    if(error) throw new Error("Schema Validation Failed");

    const currentUser = await user.findOne({ email: req.body.email });
    if(!currentUser) throw new Error("No Such User exists");

    const samePass = await bcrypt.compare(req.body.password, currentUser.password);
    if(!samePass) throw new Error("Password doesn't Match");

    return res.json({ message: "Logged In" });
}));

app.listen(PORT, () => {
    logger.success("Server is Listening to the PORT:", PORT);
});