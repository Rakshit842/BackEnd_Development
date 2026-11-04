import User from '../model/userModel.js'

const createUser = async(req,res)=>{
    try {
        const {name, age, gender, course} = req.body

        if(!name || !age || !gender || !course){
            res.status(404).json({
                message:'data did not found...',
                success: false
            })
        }

        const user = await User.create({
            name, age, gender, course
        })

        res.status(201).json({
            message: 'User has created successfully...',
            success: true,
            user
        })

    } catch (error) {
        res.status(500)({
            message: 'failed to create user...',
            success: false
        })
    }
}

export {createUser}