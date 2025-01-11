import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        content : {
            type: String,
            required: true
        },
        complete : {
            type : Boolean,
            default : false
        },
        createdBy : {
            type: mongoose.Schema.Types.ObjectId,   // make relation between models , ref field is necessary
            ref: "User"     //  -> ref name should match
        },
        subTodos : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ] // array of object/type(subTodo here)
    },
    {
        timestamps: true
    }

);

export const Todo = mongoose.model("Todo",todoSchema);
// in database(mongodb) the "Todo" will be changed(name) -> todos