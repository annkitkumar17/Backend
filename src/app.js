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


app.delete("/notes/:index", (req,res) =>{
    const {index} = req.params;
    notes.splice(index,1)
    res.status(200).json({message:"note is deleted"})
})

app.patch("/notes/:index",(req,res) => {
    const {index} = req.params;
    notes[index] = req.body
    res.status(200).json({message:"note is updated"})
})    

module.exports = app;


