import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    content:{
        type: String,
        required: true,
    },
    done:{
        type: Boolean,
        required: true,
        default: false,
    },
},{timestamps: true});

const Task = mongoose.model("Task",taskSchema);

export default Task;