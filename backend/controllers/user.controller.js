import { User } from "../models/user.model.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

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

export { registerUser }