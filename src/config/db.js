import mongoose from "mongoose";
import 'dotenv/config';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.atlas_URL);
    } catch (error) {
        console.error('Error conectando a MongoDB', error);
        process.exit(1);
    }
};