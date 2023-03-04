const router = require('express').Router()
const Properties = require("../models/PropertyDetails")


router.get('/', async (req, resp) => {
    try {
        let allproperties = await Properties.find();
        if (allproperties.length > 0) {
            resp.send(allproperties)
            console.log(allproperties)

        }
        else {
            resp.send({ message: "no product found" })
        }
    }
    catch {
        resp.status(400).json({ message: "somthing went wrong" })
    }
})


router.post("/", async (req, res) => {
        try{
            const info = await Properties.create(req.body)
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

module.exports = router;