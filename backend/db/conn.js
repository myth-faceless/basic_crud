import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; //.js extension na rakhda kahiley kahi problem aauna shakcha, be alert !

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\nMONGODB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection FAILED !", error)
        process.exit(1)
        
    }
}

export default connectDB