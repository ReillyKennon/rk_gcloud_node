'use strict'; //Make sure that ES6 is used when reading file 



// Declare server dependencies 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'rk_react_template/build')));


// test page 

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'rk_react_template/build', 'index.html'));
  });
// app.get('/', (req, res) => {
//     res.status(200).send('Hello from rk_server');
// })


// Start the server

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});







// const server = app.listen(process.env.PORT || 7777, () => {
//     const port = server.address().port;
//     console.log(`App listening on port ${port}`);
// });