const express=require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router=express.Router();
require('../db/conn');
const User=require("../model/userSchema");

router.post('/register',(req,res)=>{
    // console.log(req.body);
    const {name, email, phone, work, password, cpassword}=req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        res.json({mess:"all fields are required"});
    }
    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"Email already exist"})
        }
        const user = new User(req.body);
        
        user.save().then(()=>{
            console.log(user);
            res.json({mess:"User registered"})
        }).catch((err)=>{
            res.status(501).json(err)
        })
    }).catch((err)=>{
        res.status(500).json({error:"failed to registered"})
    })
    // res.send('mera register page');
})


router.post('/signin', async (req, res)=>{
    try{
        const { email, password }=req.body;
        if(!email || !password){
            return res.status(400).json({error:"plz fill all the fields"});
        }
        const userLogin=await User.findOne({email:email});
        if(userLogin){
            const isMatch=await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            if(!isMatch){
                res.status(400).json({error:"Invalid credentials"});
            }
            else{
                res.send({msg:"User signed in successfully"});
            }
            res.json({error:"user error"})
        }
        else{
            res.status(400).json({message:"Invalid credentials"});
        }

    }catch(err){
        console.log(err);
    }
})

module.exports=router;