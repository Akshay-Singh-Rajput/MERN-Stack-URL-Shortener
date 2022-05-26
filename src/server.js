const app = require('./index');

const connect = require('./configs/db');
const express = require('express');
require("dotenv").config();
const path = require('path');
const PORT = process.env.PORT || 5000;



//-------------deployment --------------------
__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

//-------------deployment --------------------

app.listen(PORT, async () => {
    try {
        connect();
    } catch (error) {
        console.log(error);
    }
    console.log(`server started, listening on PORT ${PORT}`);
});