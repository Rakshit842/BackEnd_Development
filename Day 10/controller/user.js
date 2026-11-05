
import User from '../model/userModel.js'

// CREATE USER
const createUser = async (req, res) => {
    try {
        const { name, age, gender, course } = req.body

        if (!name || !age || !gender || !course) {
            return res.status(400).json({
                message: 'All fields are required...',
                success: false
            })
        }

        const user = await User.create({
            name,
            age,
            gender,
            course
        })

        return res.status(201).json({
            message: 'User has created successfully...',
            success: true,
            user
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Failed to create user...',
            success: false,
            error: error.message
        })
    }
}


// READ USER
const readUser = async (req, res) => {
    try {
        const user = await User.find({
            gender: 'male'
        })

        if (user.length === 0) {
            return res.status(404).json({
                message: 'User not found',
                success: false
            })
        }

        return res.status(200).json({
            message: 'Data found successfully...',
            success: true,
            user
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            success: false,
            error: error.message
        })
    }
}


// UPDATE USER
const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, age, gender, course } = req.body

        if (!id) {
            return res.status(400).json({
                message: 'ID not found...',
                success: false
            })
        }

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, age, gender, course },
            { new: true, runValidators: true }
        )

        if (!updatedUser) {
            return res.status(404).json({
                message: 'User not found...',
                success: false
            })
        }

        return res.status(200).json({
            success: true,
            message: 'User updated successfully...',
            user: updatedUser
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Failed to update user...',
            success: false,
            error: error.message
        })
    }
}

export { createUser, readUser, updateUser }