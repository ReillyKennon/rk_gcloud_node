'use strict'; //Make sure that ES6 is used when reading file 



// Declare server dependencies 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


// test page 
app.get('/', (req, res) => {
    res.status(200).send('Hello from rk_server');
})


// Start the server
const server = app.listen(process.env.PORT || 7777, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
});