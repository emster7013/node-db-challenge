const express = require("express")

const Task = require("./task-model")

const router = express.Router()

router.get("/", (req, res)=> {
    Task.getAll()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            res.status(500).json({ message: "Problem retrieving", err })
        })
})

router.post("/", (req, res) => {
    const tasks = req.body
    
    Task.add(tasks)
        .then(task => {
        if (task) {
            res.status(201).json(task) 
        } else {
            res.status(404).json({ message: "Project id not found" })
        }
    })
        .catch(err => {
            res.status(500).json({ message: "could not add a new task to this project"})
        })
})

module.exports = router;