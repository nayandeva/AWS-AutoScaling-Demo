const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from AWS Auto Scaling Demo!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});