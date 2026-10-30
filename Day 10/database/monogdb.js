import mongoose from 'mongoose';
async function connectDB(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/BCA-Sec-A')

        console.log('mongodb has connected successfully.....')

    }catch (error){
        console.log('failes to connect to mongodb.....')
    }
}

export default connectDB

