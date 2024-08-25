import mongoose from "mongoose";

const connectDB = async() => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect('mongodb+srv://onyekachingwobia2014:119105@cluster0.uyonx.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0'
        )
        console.log(`MongoDB Connection: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default connectDB