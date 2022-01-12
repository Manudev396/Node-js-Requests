const express=require('express')
const Router=express.Router()
const mongoose=require('mongoose')
const Schema=mongoose.model('Schema')

Router.post('/upuser/:id',(req,res)=>{
    var id=req.params.id

    Schema.findByIdAndUpdate(id,{$set:req.body},function(err, result){
        if(err){
            console.log(err);
        }
    });
    res.json({
        success:"User  Updated Successfullly!!"
    })
    res.status=200
})

module.exports=Router;
