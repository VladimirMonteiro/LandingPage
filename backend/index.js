const express = require('express')
const nodeMailer = require('nodemailer')
require('dotenv').config()

const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.post('/dados', (req,res)=>{
    const {nome, email, telefone} = req.body

    res.status(200).json({message: 'Enviado com sucesso'})

    
})




app.listen(3000,()=>{
    console.log('SERVER DONE')
})