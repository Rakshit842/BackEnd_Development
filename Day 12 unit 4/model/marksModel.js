import mongoose from 'mongoose';

const marksSchema = new mongoose.Schema({
    name: {
        trype: String,
        require: true
    },
    marks: {
        type: Number,
        require: true
    }
})

const Marks = mongoose.model('marks', marksSchema)

export default Schema