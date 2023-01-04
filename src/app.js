if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
//error handlers 
const errorHandler = require("./errors/errorHandler");
const pathNotFound = require("./errors/notFound")
//require routers files 
const moviesRouter = require("./movies/movies.router")

//cors and express setup
app.use(cors())
app.use(express.json())
//routes for routers
app.use("/movies",moviesRouter)

app.use(pathNotFound)
app.use(errorHandler)


module.exports = app;
