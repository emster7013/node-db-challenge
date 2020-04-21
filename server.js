const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const projectRouter = require('./data/api/project-router');
const resourceRouter = require('./data/api/resource-router');
const taskRouter = require('./data/api/task-router');

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use('/projects', projectRouter)
server.use("/resource", resourceRouter)
server.use("/task", taskRouter)


module.exports = server;