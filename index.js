import express from 'express';
import path from 'path';
import { Url } from 'url';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import axios from 'axios';

const port = 8080;
const app = express();
const apiUrl = "http://localhost:3000"
let uName = "";
let uEmail = "";
let uPass = "";
let userData = null;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
    if (uName !== "") {
        userData = {
            "uName": uName,
            "uEmail": uEmail,
            "uPass": uPass
        }
    }
    try{
        let apiResp = await axios(apiUrl);
        apiResp = apiResp.data
        let data = apiResp
        console.log(data);
        res.status(200).render("index.ejs", { data, userData })


    }catch(error){
        console.error(error)
    }
})

app.get("/login", (req, res) => {
    if (uName !== "") {
        userData = {
            "uName": uName,
            "uEmail": uEmail,
            "uPass": uPass
        }
    }
    res.status(200).render("login.ejs", { userData });
});

app.get("/about", (req, res) => {
    if (uName !== "") {
        userData = {
            "uName": uName,
            "uEmail": uEmail,
            "uPass": uPass
        }
    }
    res.status(200).render("about.ejs", { userData })
})

app.get("/create", (req, res) => {
    if (uName !== "") {
        userData = {
            "uName": uName,
            "uEmail": uEmail,
            "uPass": uPass
        }
    }
    res.status(200).render("create.ejs", { userData })
})

app.post("/create", async (req, res) => {
    if (uName !== "") {
        userData = {
            "uName": uName,
            "uEmail": uEmail,
            "uPass": uPass
        }
    }
    const newBlogEntry = {
        "game": req.body["game"],
        "topic": req.body["topic"],
        "content": req.body["content"],
        "created": {
            "uName": uName,
            "uEmail": uEmail,
            "date": req.body["date"],
        }
    };
    try{
        let apiResp = await axios.post(apiUrl+"/create",newBlogEntry);
        console.log(apiResp.data);
    }catch(error){
        console.error(error);
    }

    res.status(200).redirect("/")
})

app.get("/fqs", (req, res) => {
    if (uName !== "") {
        userData = {
            "uName": uName,
            "uEmail": uEmail,
            "uPass": uPass
        }
    }
    res.status(200).render("fqs.ejs", { userData })
})

app.post("/", async (req, res) => {
    uName = req.body["name"],
        uEmail = req.body["email"],
        uPass = req.body["pass"]
    userData = {
        "uName": uName,
        "uEmail": uEmail,
        "uPass": uPass
    }
    try{
        let apiResp = await axios(apiUrl);
        apiResp = apiResp.data
        let data = apiResp
        console.log(data)
        res.status(200).render("index.ejs", { data, userData })


    }catch(error){
        console.error(error)
    }
})

app.post("/edit_finalize", (req, res) => {
    let blogToEdit = req.body["blogToEdit"];
    const newBlogEntry = {
        "game": req.body["game"],
        "topic": req.body["topic"],
        "content": req.body["content"],
        "created": {
            "uName": uName,
            "uEmail": uEmail,
            "date": req.body["date"],
        }
    };
    data[blogToEdit] = newBlogEntry;
    res.status(200).redirect("/")
})

app.post("/edit", (req, res) => {
    let blogToEdit = req.body["blogToEdit"];
    res.status(200).render("edit.ejs", {
        userData,
        blogName: blogToEdit,
        blog: data[blogToEdit]
    })
})

app.post("/delete", (req, res) => {
    let blogIDToDelete = req.body["blogIDToDelete"];
    delete data[blogIDToDelete]
    res.status(200).redirect("/")
})

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`CLIENT server is running on port ${port}`);
})
