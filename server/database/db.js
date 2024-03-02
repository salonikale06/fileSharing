import mongoose from 'mongoose';

const connect = async () =>{
    try {
        const url = `mongodb+srv://salonikale06:iqcf34mN6j5jKGyG@file-sharing.hpiimwi.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing`;
        
        await mongoose.connect(url);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.error(error,"connecting error to server",error.message);
    }
}

export default connect;
