const express = require ('express')
const routes = require ('./routes/public')

require('dotenv').config()
const app = express ()
//const port = 3000
app.use (express.urlencoded({extended:true}))
app.use (express.json())
app.use ('/', routes)

app.listen (process.env.PORT, ()=>{
    console.log (`Servidor Rodando na porta ${process.env.PORT}`)
})
