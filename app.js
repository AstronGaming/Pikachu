const express = require('express') //IMporting express 
const path = require('path')//Importing path built-in module of javascript
const app = express() //Storing express() in a variable app

//Setting up static and middleware
app.use(express.static('./public'))

//parse form data
app.use(express.urlencoded({extended:false}))


//Setting up route for / request
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public/index.html'))
})

//Setting up route for /contact request
app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public/contact.html'))
})

//Setting up route for /about request
app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public/about.html'))
})

//Setting up route for /login request
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public/login.html'))
})

//Setting up route for /loginsucess request
app.post('/loginsucess',(req,res)=>{
    const{name} = req.body
    if(name){
        return res.status(200).send(`Login Sucess ${name}!`)
    }
    res.status(401).send('please provide credentials')
})

//for all invalid request
app.all('*',(req,res)=>{
    res.status(404).send('Resource not found')
})

//app listening at localhost 5000
app.listen(5000,()=>{
    "App Is listening at port 5000"
})