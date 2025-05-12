import mongoose from "mongoose";

let isConnected = false 

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('Mongo DB is already connected')
    }

    if (!process.env.MONGODB_URI) {
      throw new Error("MongoDB URI is not provided")
    }

    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: 'share_prompt',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })  
      isConnected = true;
      console.log('MongoDB is connected')
    } catch (err) {
        console.log(err)
    }
}