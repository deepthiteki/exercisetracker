const users = require('../models/user.model');
const bcrypt = require("bcryptjs");

const login = async(req,res) => {
    try{
        const{
            email,
            password
        } = req.body;
        const user = users.findOne({email:email})
        if(!user){
            throw new Error("User not found")
        }
        const isPasswordCorrect = bcrypt.compare(user.password,password)
        if(isPasswordCorrect){
            return res.status(200).send({
                message: "Login Successful",
                user: user

            })
        }
        throw new Error("Invalid Password");

    }
    catch(error){
        console.log(error);
        return res.status(400).send({
            error:error.message
        })
    }
}

const signUp = async(req,res) => {
    try{
        const{
            email,
            password,
            cpassword
        } = req.body;
        const user = await users.create({
            email:email,
            password:password
        })

    }
    catch(error){
        console.log(error);
        return res.status(400).send({
            msg:"Something went wrong"
        })
    }
}