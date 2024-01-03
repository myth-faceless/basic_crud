import { User } from "../models/user.model.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose from "mongoose";


// register user
const registerUser = asyncHandler (async (req, res) => {
    // console.log(req.body)
    const { name, email, occupation, contact, address, description } = req.body;
    
    //validation - not empty
    if([name, email, occupation,contact, address, description].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required !")
    }

    // check if user with email already exists
    const existeUser = await User.findOne({ email })

    if(existeUser) {
        throw new ApiError(409, "User with email already exist !")
    }

    //create user object - create entry in database
    const user = await User.create({
        name, 
        email,
        occupation,
        contact,
        address,
        description
    })

    if(!user) {
        throw new ApiError(500, "Something went wrong while creating user !")
    }

    return res.status(201).json(
        new ApiResponse(200, user, "User Created Successfully !")
    )
})

// get user data

const getData = asyncHandler (async (req, res) => {
    const userdata = await User.find();
    if(!userdata) {
        throw new ApiError(404, "No user data found !")
    }

    return res.status(200).json(
        new ApiResponse(200, userdata)
    )

})


// get individual user data 

const getUser = asyncHandler( async (req, res) => {
    // console.log(req.params)
    const userId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: 'Invalid userId format' });
     }
    const user = await User.findById(userId);

    if(!user) {
        throw new ApiError(404, "User not found !")
    }

    return res.status(200).json(
        new ApiResponse(200, user)
    )

})

// update user Data

const updateUser = asyncHandler (async (req,res) => {
    const {id} = req.params;
    const user = await User.findById(id)
    if(!user) {
        throw new ApiError(404, "User not found")
    }
    const update = await User.findByIdAndUpdate(id,req.body,{
        new:true
    });

    if(!update) {
        throw new ApiError(500, "Server Error !")
    }

    return res.status(200).json(
        new ApiResponse(200, update)
    )
})

// delete user date

const deleteUser = asyncHandler( async(req,res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    if(!user) {
        throw new ApiError(404, "User not found !")
    }

    const deleteUser = await User.findByIdAndDelete(id)

    if(!deleteUser) {
        throw new ApiError(500, "Server Error !")
    }
    
    return res.status(200).json(
        new ApiResponse(200, deleteUser, "User Deletes Successfully !")
    )
})

export { registerUser, getData, getUser, updateUser, deleteUser }