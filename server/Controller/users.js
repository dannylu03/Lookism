import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createUser = async (req, res) => {
    const user = req.body;

    const newUser = new User(user);
    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

export const getUserId = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateUser = async (req, res) => {

    try{

        const user = await User.findById(req.params.id);

        if(req.body.password !== user.password){
            res.status(401)
            throw new Error('User not authorized')
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })

        
        res.status(200).json(updatedUser)
    } catch(error){
        res.status(404).json({ message: error.message })
    }

    
}

 