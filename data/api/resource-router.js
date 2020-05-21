const express = require("express")

const Resource = require("./resource-model")

const router = express.Router()

router.get("/", (req, res)=> {
    Resource.getAll()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            res.status(500).json({ message: "Problem getting resource list", err })
        })
})

router.post("/", (req, res) => {
    Resource.add(req.body)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            res.status(500).json({ message: "Did not add a new resource", err})
        })
})

module.exports = router;