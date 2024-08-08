const User = require("../models/user.model")
const bcrypt = require("bcryptjs")
const Salt = 10;

exports.store = async(req,res) =>{
    try{
        const {password} = req.body;
        const encryptedPassword = await bcrypt.hash(password,Salt);
        req.body.password = encryptedPassword;    
         const user = await User.create(req.body)
        res.json({status:200,message:"User created successfully",user})

    }
    catch(err){
        console.log(err);
    }
}

exports.login = async(req,res) =>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email:email})
        if(user){
            const comparePassword = await bcrypt.compare(password,user.password)
        if(comparePassword){
            return res.json({message:"User logged in Successfully"});
        }
        else{
            return res.json({message:"Wrong Credential"});
        }
        }
        res.json({status:200,message:"User created successfully",user})
        
    }
    catch(err){
        console.log(err);
    }
}

exports.index = async (req,res)=>{
    try{
        const users = await User.find()
        res.json({status:200,message:"User fetched successfully", users})

}
    catch(err){
        console.log(err);
    }
}


exports.get = async (req,res)=>{
    try{
        const {id} = req.params;

        const user = await User.findOne({_id:id})
        if(!user){
            return res.json({status:404,success:false,message:`Couldn't find user`})
        }
        res.json({status:200,message:"User fetched successfully",user})

}
    catch(err){
        console.log(err);
    }
}

exports.destroy = async (req,res)=>{
    try{
        const {id} = req.params;
        const user = await User.findOneAndDelete({_id:id})
        if(!user){
            return res.json({status:404,success:false,message:`Couldn't find user`})
        }

        res.json({status:200,message:"User Deleted successfully"})
        

}
    catch(err){
        console.log(err);
    }
}

exports.update = async (req,res)=>{
    try{
        const {id} = req.params;
        const user = await User.findOneAndUpdate({_id:id},req.body,{new:true})
        if(!user){
            return res.json({status:404,success:false,message:`Couldn't find user`})
        }

        res.json({status:200,message:"User Updated successfully"})
        

}
    catch(err){
        console.log(err);
    }
}