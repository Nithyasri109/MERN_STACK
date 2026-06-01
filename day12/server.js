const express = require("express");

const app = express();

// Logging Middleware
app.use((req, res, next) => {

    console.log("Method:", req.method);
    console.log("URL:", req.url);

    next();
});

// Route
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});