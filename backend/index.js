import dotenv from "dotenv";
import connectDB from "./db/conn.js";
import { app } from "./app.js"


dotenv.config({
//    path: './env'  give path if the .env file and app.js files are in sepetate folder structure. In this case, both .env and app are in root folder so we do not have to give path.
})

const port = process.env.PORT;

connectDB().then(() => {
    app.listen(port || 8000, () => {
        console.log(`Server is running at port: ${port}`)
    })
}).catch((err) => {
    console.log("Mongo DB connection Failed !!", err)
})