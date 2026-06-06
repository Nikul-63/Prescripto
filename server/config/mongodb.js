import mongoose from 'mongoose';

const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
    console.log('Database Connected..!');
}

export default connectDB;