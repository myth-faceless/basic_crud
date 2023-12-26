import dotenv from "dotenv";
import express from "express";

const app = express();

dotenv.config({
    path: './env'
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is starting on port ${process.env.PORT}`)
})