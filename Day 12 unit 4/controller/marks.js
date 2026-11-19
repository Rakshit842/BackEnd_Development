import Marks from "../model/marksModel.js"

const showMarks = async (req,res)=>{
    try{    
        const marks = await marks.find()

        return res.status(200).json({
            message: "marks dound successfully,,",
            success:true
        })

    } catch (error) {
        res.status(500).json({
            message:'internal server error',
            success:false
        })
    }
}

const createMarks = async(req,res)=>{
    try{
        const {name, marks} = req.body

        const Usermarks = await Marks.create({name, marks})

        res.status(201),json({
            message:'marks created successfully...',
            marks,
            success: true
        })
    } catch (error) {

    }
}