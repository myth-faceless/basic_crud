// require('dotenv').config()
// const express = require('express')
import dotenv from "dotenv";
import express from "express"

import connectDB from "./db/conn.js";

import cors from "cors";

dotenv.config({
//    path: './env'  give path if the .env file and app.js files are in sepetate folder structure. In this case, both .env and app are in root folder so we do not have to give path.
})

const port = process.env.PORT
// console.log(port)

const app = express();


//for handling data
app.use(cors())
app.use(express.json())



app.listen(port || 8000, () => {
    console.log(`Server is starting on port ${port}`)
})

connectDB();