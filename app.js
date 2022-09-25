const router = require('./route/user.route')
const express = require('express');
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

app.post('/',(req,res)=>{
 const name = req.body.name;
 const age = req.body.age;
 res.send(`your name is ${name} your age is ${age}`)
    
})



app.use(router)

app.use((req,res)=>{
    res.send('404 your page is not found')
})


module.exports = app;