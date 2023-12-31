import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    occupation: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }


  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
