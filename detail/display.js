const express = require('express')
const Router=express.Router()
const mongoose=require('mongoose')
const Schema=mongoose.model('Schema')


Router.get('/empdisp',(req,res)=>{
    //getting all data from database
    Schema.find()
    .then((data)=>{
        //checking if data present or not
        if(!data)
        {
            res.json(
                {
                    error:"NO DATA PRESENT IN DATABASE "
                }
            )
            res.status(404)
        }
        else{
            res.json(data)
            res.status(200)
        } 
    })
    .catch(err=>{
        console.log('NO DATA PRESENT')
    })
})

module.exports=Router