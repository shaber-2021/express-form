const express = require('express');
const router = express.Router();


router.get('/about',(req,res)=>{
    res.send('this is about page')
})

router.post('/create',(req,res)=>{
    res.send('this is your create page')
})

router.delete('/delete',(req,res)=>{
    res.send('this is your delete page ')
})


module.exports=router;