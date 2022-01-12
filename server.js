const express=require('express')
const morgan =require('morgan')
const mongoose =require('mongoose')
const app=express()
require('dotenv').config()
app.use(express.json())

//database connection
mongoose.connect(process.env.MONGO_URI)
.then(err=>{
    console.log('DATABASE CONNECTED SUCCESSFULLY!!');
})

//schema mmodel
require('./model/model')
mongoose.model('Schema')


//morgan
app.use(morgan('dev'))

//routes
app.use(require('./detail/add_user'))
app.use(require('./detail/display'))
app.use(require('./detail/find_id'))
app.use(require('./detail/update'))



//server  connection
app.listen(process.env.PORT,()=>{
    console.log(`SERVER  RUNNING AT http://localhost:${process.env.PORT}`)
})
