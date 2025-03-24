const express = require("express")
const { join } = require("node:path")

const server = express()

server.use(express.static(join(__dirname,"dist")))

server.listen(5173)