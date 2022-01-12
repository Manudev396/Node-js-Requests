const express=require('express')
const mongoose=require('mongoose')
const Schema=mongoose.model('Schema')
const Router =express.Router()

Router.get('/empid/:id',(req,res)=>{
    var id=req.params.id

    //checking if id matches the data in database or not
    if(!id)
    {
        res.json({
            error:"NO SUCH ID IS PRESENT IN DB"
        })
        res.status(404)
    }
    else
    {
        Schema.findOne(
            {
                _id:id
            }
        )
        .then((data)=>{
            //Displaying the data if exists
            if(data)
            {
                res.json(data)
                res.status(200)
            }
            else{
                res.json(
                    {
                        error:"NO DATA PRESENT IN DB"
                    }
                )
                res.status(404)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

})

module.exports=Router
