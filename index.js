import express from 'express';
import path from 'path';
import { Url } from 'url';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const port = 8080;
const app  = express();
const uName = "";
const uEmail = "";
const uPass = "";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.status(200).render("index.ejs")
})

app.get("/login",(req,res)=>{
    res.status(200).render("login.ejs");
});

app.get("/about",(req,res)=>{
    res.status(200).render("about.ejs")
})

app.get("/fqs",(req,res)=>{
    res.status(200).render("fqs.ejs")
})

app.post("/",(req,res)=>{
    let data = {
        uName: req.body["name"],
        uEmail: req.body["email"],
        uPass: req.body["pass"]
    }
    console.log(data)
    res.status(200).render("index.ejs",{data})

})

app.listen(port,(err)=>{
    if (err) throw err;
    console.log(`server is running on port ${port}`);
})
