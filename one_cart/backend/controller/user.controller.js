import User from "../model/user.Model.js";
import validator from "validator"
import { authToken } from "../utils/token.js";


export const register = async (req,res) => {
    try {

        const {name,email,password} = req.body;


        if(!email || !password || !name){

            return res.status(400).json({
                success:false,
                message:"Something is missing"
            })
        }

        //check user exist or not 

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exist"
            })
        }


        //validate email

        if(!validator.isEmail(email)){
            return res.status(400).json({
                success:false,
                message:"Email is not valid"
            })
        }

        //validate password

        if(password.length<8){
            return res.status(400).json({
                success:false,
                message:"Enter strong password"
            })
        }

        //hashpassword
        const hashpassword = await bcrypt.hash(password,10);

        const user = await User.create({
            name,
            email,
            password:hashpassword
        })

        const token = await authToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge:7*24*60*60*1000

        })
        return res.status(201).json({
            success:true,
            message:"User register Successfully",
            user
        })

        
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
        
    }
}