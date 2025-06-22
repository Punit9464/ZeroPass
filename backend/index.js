import 'dotenv/config';
import express from 'express';
import connectDb from './utils/dbConnector.js';
import logger from './utils/logger.js';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb().then(() => {
    logger.success("MongoDB Connected Successfully");
}).catch((e) => {
    logger.error("Error while Connecting to Database... " + e);
});

app.listen(PORT, () => {
    logger.success("Server is Listening to the PORT:", PORT);
});