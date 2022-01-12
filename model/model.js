const mongoose =require('mongoose')

const Schema=new mongoose.Schema({
    empid:{
        type:String,
        required:true
    },
    empname:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

exports.Schema=mongoose.model('Schema',Schema)