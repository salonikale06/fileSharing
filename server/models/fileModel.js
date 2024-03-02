import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    path:{
        type: String,
        required : true
    },
    name:{
        type: String,
        required : true
    },
    downloadContent:{
        type: Number,
        required : true,
        default:0
    }
})

const fileModel = mongoose.model('file-Sharing',fileSchema)

export default fileModel;