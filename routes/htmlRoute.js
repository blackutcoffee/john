const path = require('path');
// Exporting Paths
const router = require('express').Router();

//Serves notes.html 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//Route that renders index.html as default page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;