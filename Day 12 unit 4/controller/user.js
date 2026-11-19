import User from "../model/userModel.js"

import bcrypt from 'bcrypt'

const signup = async (req,res)=>{
    try {
        const {name, email, password, role} = req.body


        if(!name || !email || !password || !role){
            return res.status(404).json({
                message: 'data not found for signup',
                success:false
            })
        } 

        const hashpassword = await bcrypt.hash(password, 10)

        let user = await User.create({
            name, email , password : hashpassword, role
        })


        return res.status(201).json({
            message:'user created successfully...',
            success:true,
            user
        })


    } catch (error) {
         console.log(error)
            return res.status(500).json({
                message:'internal server error',
                success:false
            })

    }
}

const login = async(req,res)=>{
    try{
        const {email, password} = req.body

        if(!email || !password){
            return res.status(404).json({
                message: 'data not found for login',
                success: false
            })
        }
        
        let user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                success:false,
                message:'Invalid email id, try again'
            })
        }

        if(await bcrypt.compare(password, user.password)){
            return res.status(200).json({
                message:'Login successfull...',
                success:true,
                user
            })
        }else{
            return res.status(404).json({
                success:false,
                message:'Invalid password...'
            })
        }

    } catch(error) {
        return res.status(500).json({
            message: 'Internal server error..',
            success: false
        })
    }
}
export {signup, login}