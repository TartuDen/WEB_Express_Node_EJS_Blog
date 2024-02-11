import express from 'express';
import path from 'path';
import { Url } from 'url';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const port = 8080;
const app = express();
let uName = "";
let uEmail = "";
let uPass = "";
let userData = null;
let data = {
    "blogTempl1": {
        "game": "Lineage 2",
        "topic": "Dive into the Legendary World of Lineage 2: Unveiling the Epic Saga",
        "content": "Welcome to the realm of Lineage 2, where heroes are forged, alliances are made, and battles shape the fate of the world. In this MMORPG masterpiece, players embark on a journey through a vast and immersive fantasy universe filled with breathtaking landscapes, formidable monsters, and thrilling adventures. Join us as we delve into the rich lore and intricate gameplay mechanics of Lineage 2. From choosing your character class to mastering the art of combat, we'll guide you through every step of your epic quest for glory. Uncover hidden secrets, engage in epic PvP battles, and forge alliances with fellow adventurers as you strive to become a legendary hero in the world of Lineage 2.",
        "created": {
            "uName": "Buck",
            "uEmail": "buck@gmail.com",
            "date": "01.02.2024 17:30",
        }
    },
    "blogTempl2": {
        "game": "WOW Retail",
        "topic": "World of Warcraft Retail: A Timeless Adventure Awaits",
        "content": "Enter the world of Azeroth, where heroes rise and legends are born. World of Warcraft Retail invites players to embark on an epic journey through a vast and vibrant universe filled with endless possibilities. From exploring lush forests to delving into ancient dungeons, the world of Warcraft is yours to explore. Join us as we explore the latest updates, expansions, and events in World of Warcraft Retail. Discover new lands, battle powerful foes, and uncover legendary treasures as you forge your path to greatness. Whether you're a seasoned veteran or a newcomer to the world of Warcraft, there's always something new to discover in this ever-evolving MMORPG masterpiece.",
        "created": {
            "uName": "Lacy",
            "uEmail": "lacy@gmail.com",
            "date": "03.02.2024 12:00",

        }
    },
    "blogTempl3": {
        "game": "WoW Classic",
        "topic": "Return to Azeroth: Rediscovering the Magic of WoW Classic",
        "content": "Relive the glory days of Azeroth in World of Warcraft Classic, a faithful recreation of the original MMORPG experience that captured the hearts of millions. Journey back to a time when the world was vast and untamed, and the challenges were as daunting as they were rewarding. Join us as we reminisce about the early days of WoW Classic, from the iconic dungeons to the epic raids that tested the courage and skill of even the bravest adventurers. Whether you're reliving nostalgic memories or experiencing the magic of Azeroth for the first time, WoW Classic offers an unforgettable journey into gaming history.",
        "created": {
            "uName": "Buck",
            "uEmail": "buck@gmail.com",
            "date": "04.02.2024 16:12"
        }
    },
    "blogTempl4": {
        "game": "Guild Wars 2",
        "topic": "Guild Wars 2: Enter a World of Endless Adventure and Possibility",
        "content": "Welcome to Tyria, a world of breathtaking beauty and boundless adventure in Guild Wars 2. Set against the backdrop of a rich and vibrant fantasy universe, Guild Wars 2 invites players to embark on an epic journey filled with dynamic events, thrilling combat, and unforgettable moments. Join us as we explore the vast world of Guild Wars 2, from the towering peaks of the Shiverpeak Mountains to the sun-drenched shores of the Crystal Desert. Discover your destiny as you battle ancient dragons, forge alliances with powerful allies, and shape the fate of Tyria itself. With a dynamic world that responds to your actions and a diverse range of classes and races to choose from, Guild Wars 2 offers endless opportunities for adventure and discovery.",
        "created": {
            "uName": "Den",
            "uEmail": "den@gmail.com",
            "date": "06.02.2024 14:42"
        }
    },
    "blogTempl5": {
        "game": "ESO",
        "topic": "The Elder Scrolls Online: Embark on a Legendary Journey Across Tamriel",
        "content": "Step into the world of Tamriel in The Elder Scrolls Online, an epic MMORPG adventure set in the legendary Elder Scrolls universe. Explore the vast continent of Tamriel, from the snow-capped peaks of Skyrim to the sun-drenched sands of Hammerfell, as you embark on a quest to save the world from destruction. Join us as we delve into the rich lore and immersive gameplay of The Elder Scrolls Online. Create your own unique character, embark on epic quests, and engage in intense PvP battles as you journey across Tamriel in search of adventure and glory. With a vast open world to explore, countless quests to complete, and endless opportunities for adventure, The Elder Scrolls Online offers a truly unforgettable gaming experience for fans of the series and newcomers alike.",
        "created": {
            "uName": "pomogadryg",
            "uEmail": "pg@gmail.com",
            "date": "10.02.2024 10:12"
        }
    }
};

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    if (uName !== "") {
        userData = {
            "uName": uName,
            "uEmail": uEmail,
            "uPass": uPass
        }
    }
    res.status(200).render("index.ejs", { data, userData })
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

app.post("/create", (req, res) => {
    if (uName !== "") {
        userData = {
            "uName": uName,
            "uEmail": uEmail,
            "uPass": uPass
        }
    }
    let k = Object.keys(data)
    let idx = k.length
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

    // Add the new blog entry to the existing data object
    data["blogTempl" + idx + 1] = newBlogEntry;
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

app.post("/", (req, res) => {
    uName = req.body["name"],
        uEmail = req.body["email"],
        uPass = req.body["pass"]
    userData = {
        "uName": uName,
        "uEmail": uEmail,
        "uPass": uPass
    }
    res.status(200).render("index.ejs", { data, userData })
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
    console.log(`server is running on port ${port}`);
})
