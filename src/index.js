const express = require("express");
const app = express();
const path = require("path");

app.use(express.static('src'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'html/index.html'));
    //res.send(path.join(__dirname, 'html/index.html'))
});

const API_PORT = 3005;
app.listen(API_PORT, () => {
    console.log("Listening on Port " + API_PORT);
});