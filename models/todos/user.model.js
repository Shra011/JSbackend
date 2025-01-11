import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username : {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email : {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password : {
            type: String,
            required: [true, "password is required"],   // custom validation message
            min: [8, "password should be minimum 8 character"],
            max: [12, "password should not be maximum 12 character"]
        }
    },
    {
        timestamps: true
    }
);
//ref name should match         this name
//                                 ↓

export const User = mongoose.model("User",userSchema);
// in database(mongodb) the "User" will be changed(name) -> users
