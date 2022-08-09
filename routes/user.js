const express = require("express");
const axios = require("axios");
const User = require("../models/user");
const router = require("express").Router();

router.get("/getalluser", async(req, res) =>{
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response );
        res.json(response.data);

    }catch(err){
        res.status(500).json({error: "An error occured"})
    }
})



module.exports = router