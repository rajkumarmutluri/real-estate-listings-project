const express= require("express");
const app=express();
const conn=require('./connection/conn');
const propdetails=require('./models/propdetails');
const bodyParser=require("body-parser");

conn();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.get("/propdetails", async (req, res) => {
    // Write the ,code to fetch the data
    try{
         const data = await propdetails.find()
        console.log(data);
        res.status(200).json({
            status: "Success",
            data
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

app.post("/add", async (req, res) => {
    // Write the ,code to fetch the data
    try{
        const info = await propdetails.create(req.body)
        console.log(info);
        res.status(200).json({
            status: "Success",
            info
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

app.get("/propdetails/:id", async (req, res) => {
    // Write the ,code to fetch the data
    try{
         const search = await propdetails.find({
            _id:req.params.id
         });
        console.log(search);
        res.status(200).json({
            status: "Success",
            search
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

app.get("*", (req, res) => {
    res.status(404).send("API Work in progress");
})


app.listen(5000, () => console.log("Our server is up and running at port 5000"));

