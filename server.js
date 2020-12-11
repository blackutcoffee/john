// Required Dependencies
const path = require("path");
const fs = require("fs");
const express = require('express');
// Server Instantiate Express App Then Sets Hardcoded Port.
const PORT = process.env.PORT || 8080;
const app = express();


const apiRoutes = require('./routes/apiRoute');
const htmlRoutes = require('./routes/htmlRoute');


//Parses Stringed Array 
app.use(express.urlencoded({ extended: true }));

//Parse Incoming JSON 
app.use(express.json());

//Middleware: points our server to a series of "route" files.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.use(express.static('public'));



// The below code effectively "starts" our server
// =============================================================================
// Big Brothers LISTENER!
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}.`)
});

