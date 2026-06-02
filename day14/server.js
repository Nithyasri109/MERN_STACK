const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    department: String
});

// Student Model
const Student = mongoose.model("Student", studentSchema);

app.get("/", (req, res) => {
    res.send("Mongoose Connected Successfully");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});