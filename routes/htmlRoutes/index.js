

const path = require("path")
const router = require("express").Router()

router.get("/notes",  (req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req,res) => {
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
