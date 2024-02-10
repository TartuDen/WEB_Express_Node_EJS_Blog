import express from 'express';
import path from 'path';
import { Url } from 'url';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const port = 8080;
const app  = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.status(200).render("index.ejs")
})

app.listen(port,(err)=>{
    if (err) throw err;
    console.log(`server is running on port ${port}`);
})
