import mongoose from 'mongoose';

const DB_URI = process.env.MONGO_URI;

async function connectDb() {
    if(!DB_URI) {
        console.error("No Connection URI provided");
    }
    await mongoose.connect(DB_URI);
}

export default connectDb;