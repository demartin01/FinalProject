//server
const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/homesdb", {useNewUrlParser: true});

app.listen(PORT, () => console.log(`now listening on http://localhost:${PORT}`))




