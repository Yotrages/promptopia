import mongoose from "mongoose";

let isConnected = false;

const connectToBackend = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('MongoDb is already connected')
    }

    try {
        mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'Login Users',
        })
        console.log('Mongodb connected successfully')
        isConnected = true
    } catch (error) {
        console.log(error)
    }
}