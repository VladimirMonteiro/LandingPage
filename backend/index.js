require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const smtp = require('./config/smtp')
const cors = require('cors')


const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())





app.post('/dadosPost', (req,res)=>{
    const {nome, email, telefone} = req.body

  

    const transporter = nodemailer.createTransport({
        host: smtp.host,
        port: smtp.port,
        secure: false,
        auth: {
          user: smtp.user,
          pass: smtp.pass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      
      async function run() {
        const mailSent = await transporter.sendMail({
          text: "texto do email",
          subject: "Contato enviado pelo site",
          from: smtp.user,
          to: smtp.user,
          html: `
          <html>
          <body>
            <strong>Nome: <strong>${nome}<br>
            <strong>Email: <strong>${email}<br>
            <strong>Telefone: <strong>${telefone}
          </body>
        </html> 
          `,
        });
      
        console.log(mailSent);
      }
      
      run();


    res.status(200).json({message: 'enviado com sucesso'})

})


app.listen(3000, ()=>{
    console.log('SERVER ON')
})




