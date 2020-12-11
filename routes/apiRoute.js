const router = require('express').Router();
//Ascertains New Notes From db/notes
const notes = require('../db/notes');

//Router GETs /api/notes, GETs Response From End-User
router.get('/notes', (req, res) => {
    notes.getNotes().then(notes => res.json(notes))
        .catch(err => res.status(400).json(err))
});

//Router that POSTs /api/notes, POSTs Requested Responses Provided From Enduser
router.post('/notes', (req, res) => {
    notes.addNote(req.body).then(notes => res.json(notes))
        .catch(err => res.status(400).json(err))
});

//Router DELETEs Notes With ID Tags
router.delete('/notes/:id', (req, res) => {
    notes.removeNote(req.params.id).then(() => res.json({ ok: true }))
        .catch(err => res.status(400).json(err))
});


module.exports = router;