//server
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

// middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
};

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/homesdb", {useNewUrlParser: true});

app.use(routes);

app.listen(PORT, () => console.log(`now listening on http://localhost:${PORT}`))




