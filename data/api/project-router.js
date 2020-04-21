const express = require("express")

const Project = require("./project-model")

const router = express.Router()

router.get("/", (req, res) => {
    Project.getAll()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ message: "Problem getting project list", err })
        })
})

router.post("/", (req, res) => {
    Project.add(req.body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ message: "could not retrive project", err})
        })
})

module.exports = router;