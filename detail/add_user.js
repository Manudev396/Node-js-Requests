const express=require('express')
const Router=express.Router()
const mongoose=require('mongoose')
const Schema=mongoose.model('Schema')

//adding new user into database
Router.post('/addemp',(req,res)=>{
    var {empid,empname,city}=req.body

    //checking if body is present or not
    if(!empid || !empname || !city)
    {
        res.json(
            {
                error:"PLEASE ENTER THE EMP DETAILS"
            }
        )
        res.status(421)
    }
    else{
        var insdata=new Schema({
            empid,
            empname,
            city
        })

        //saving user into database
        insdata.save()
        .then(data=>{
            if(data)
            {
                res.json(
                    {
                        success:"EMP DETAILS INSERTED"
                    }
                )
                res.status(200)
            }
            else{
                res.json({
                    error:"EMP DETAILS MISSING!!"
                })
                res.status(421)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
})

module.exports=Router