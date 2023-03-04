
const conn=require('./connection/conn');


const express = require('express');
const mongoose = require("mongoose");
const app=express();
const port = '8080'
const cors = require("cors")
const bodyParser = require('body-parser');

const property=require("./routes/exitstingproperty")
const search=require("./routes/search")
const soldStatus=require("./routes/updateStatus")

conn()


//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//ppty and search routing
app.use("/properties",property)
app.use("/add",property)
app.use("/search",search )
app.use("/properties",soldStatus)
app.use('/*', (req, res) => {
  res.send('Page not Found')
})

//server listening
app.listen(port, () => { console.log(`app is running at port ${port}`); })







// const express= require("express");
// const app=express();
// const conn=require('./connection/conn');
// const propdetails=require('./models/propdetails');
// const bodyParser=require("body-parser");

// conn();
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json());
// app.get("/propdetails", async (req, res) => {
//     // Write the ,code to fetch the data
//     try{
//          const data = await propdetails.find()
//         console.log(data);
//         res.status(200).json({
//             status: "Success",
//             data
//         })
//     }catch(e){
//         res.status(500).json({
//             status: "Failed",
//             message: e.message
//         })
//     }
// });

// app.post("/add", async (req, res) => {
//     try{
//         const info = await propdetails.create(req.body)
//         console.log(info);
//         res.status(200).json({
//             status: "Success",
//             info
//         })
//     }catch(e){
//         res.status(500).json({
//             status: "Failed",
//             message: e.message
//         })
//     }
// });

// app.get("/propdetails/:id", async (req, res) => {
//     // Write the ,code to fetch the data
//     try{
//          const search = await propdetails.findOne({
//             _id:req.params.id
//          });
//         console.log(search);
//         res.status(200).json({
//             status: "Success",
//             search
//         })
//     }catch(e){
//         res.status(500).json({
//             status: "Failed",
//             message: e.message
//         })
//     }
// });

// app.get("*", (req, res) => {
//     res.status(404).send("API Work in progress");
// })


// app.listen(5000, () => console.log("Our server is up and running at port 5000"));