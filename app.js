const express = require("express");

const mongoose = require("mongoose");

const app = express();

//DB config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db)
.then(() => console.log("MongoDB connected ..."))
.catch(err => console.log(err));






const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));