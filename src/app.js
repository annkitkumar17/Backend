// server ko create
const express = require("express");


const app = express();
app.use(express.json());

const notes = []

app.post("/notes", (req,res) => {
    notes.push(req.body);

    res.status(201).json({message:"note is created"})
})

app.get("/notes",(req,res) =>{
    res.status(200).json({message:"note fetch sucessfully",
        notes:notes
    }) 
})



module.exports = app;


