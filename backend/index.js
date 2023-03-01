const express = require("express");
const conn = require("./connection/conn");
const User = require("./model/user");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

conn()



app.post("/signup", async (req, res) => {
    try {

        const user = await User.create(req.body)
        res.json({
            status: "Success",
            user
        })

    } catch (e) {
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})

app.post("/login", async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        res.send(user)
        if (user) {
            res.send(user)
        }
        else {
            res.send({ result: "Not user fond" })
        }
    }
    else {
        res.send({ result: "Not user fond" })
    }
})

app.listen(5000, () => {
    console.log("listing port on 5000");
})