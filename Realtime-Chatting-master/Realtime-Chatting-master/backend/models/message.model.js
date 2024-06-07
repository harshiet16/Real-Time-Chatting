import mongoose from 'mongoose';

const mongooseSchema=new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true});

const Message=mongoose.model('Message', mongooseSchema);

export default Message;