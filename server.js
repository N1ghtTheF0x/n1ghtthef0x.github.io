const express = require("express")
const { join } = require("path")

const app = express()

app.use((req,res,next) =>
{
    console.info(`[Server][${new Date().toLocaleTimeString("de")}] ${req.method.toUpperCase()} ${req.url} ${res.statusCode} ${res.statusMessage}`)
})

app.use(express.static(join(__dirname,"docs")))

app.listen(8080)