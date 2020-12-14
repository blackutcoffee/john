// var path = require('path');
// // Exporting Paths
// const router = require('express').Router();

// module.exports = function(app) {

//     app.use('*.js', (req, res, next) => {
//       res.set('Content-Type', 'text/javascript')
//       next();
//     })
// const path = require('path');

// module.exports = (app) => {
//     app.get("/notes/", (req,res) => {
//         res.sendFile(path.join(__dirname, "../public/notes.html"));
//     });
//     app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//     });
// };





const path = require("path")
const router = require("express").Router()

router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
//     app.get("/notes/", function(req, res) {
//       res.sendFile(path.join(__dirname, "../public/notes.html"));
//     });
  
//     app.get("/assets/js/index.js", function(req, res) {
//       res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
//     });
  
//     app.get("*", function(req, res) {
//       res.sendFile(path.join(__dirname, "../public/index.html"));
//     });
//   };


  