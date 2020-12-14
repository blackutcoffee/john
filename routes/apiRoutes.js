// const fs = require("fs");
// const router = require('express').Router();
// const { notes } = require('../db/notes');
// const noteData = require("../db/db.json");

// // const { validateNote, createNewNote } = require("../../lib/notes");
// // //Router GETs /api/notes, GETs Response From End-User
// // router.get('/notes', (req, res) => {
// //     // notes.getNotes().then(notes => res.json(notes))
// module.exports = function(app) {
  
//   app.get("/api/notes", function(req, res) {
//     res.json(noteData);
//   });
// //     //     .catch(err => res.status(400).json(err))
// //     let results = notes;
// //     res.json(results);
// // });

// // //Router that POSTs /api/notes, POSTs Requested Responses Provided From Enduser
// // router.post('/notes', (req, res) => {
// //      // set id based on what the next index of the array will be and add it to the database
// //   req.body.id = notes.length.toString();
// app.post("/api/notes", function(req, res) {
//   let received = req.body;
//   received.id = noteData.length.toString();
//   noteData.push(received);
//   res.json(received);
// })
// //Router DELETEs Notes With ID Tags
// // router.delete('/notes/:id', (req, res) => {
// //     let id = req.params.id;
// //     // verify that id matches and splice it from the data set
// //     if (notes[id].id == id) {
// //       notes.splice(id, 1);
// //     } else {
// //       res.status(400).send("Note ID not found!");
// //     }     // reformat IDs
// app.delete("/api/notes/:id", function(req,res) {
//   let deleteID = req.params.id;
//   for (let i = 0; i < noteData.length; i++) {
//     if (noteData[i].id == deleteID) {
//       noteData.splice(i, 1);
//       break;
//     }
//   }
//   for (let i = 0; i < noteData.length; i++) {
//     noteData[i].id = i.toString();
//   }
//   return res.json(true);
// })
// };

// //     for (let i = 0; i < notes.length; i++) {
//        notes[i].id = i.toString();
//      }
//      res.json(true);

//     notes.removeNote(req.params.id).then(() => res.json({ ok: true }))
//       .catch(err => res.status(400).json(err))
//  });

//  module.exports = router;



// const { Router } = require('express');
// const fs = require('fs');
// const data = require('../db/db.json')

// // module.exports = (app) => {
     
// //     app.get("/api/notes", (request, result) => {
// //         fs.readFile("./db/db.json", "utf-8", (err, notes) => {
// //         if (err) throw (err);
// //         let notesParsed;
// //         try {
// //             notesParsed = [].concat(JSON.parse(notes));
// //         } catch (err) {
// //             notesParsed = [];
// //         }
// //         result.json(notesParsed);
// //     })
// // });

// // app.delete("/api/notes/:id", (request, result) => {
// //     let noteId = request.params.id;
// //     console.log("noteId: ", noteId);
    
// //     fs.readFile("./db/db.json", "utf-8", (err, response) => {
// //         if (err) throw (err);
// //         const allNotes = JSON.parse(response);
// //         const newNotes = allNotes.filter(note => note.id != noteId);
// //         fs.writeFile("./db/db.json", JSON.stringify(newNotes, null, 2),
// //             err => {
// //                 if (err) throw err;
// //                 result.json(true);
// //                 console.log('Notes have been deleted!');
// //             }
// //         );
// //       });
// //     });

// // app.post("/api/notes", (request, result) => {
// //     console.log(data, "adding new note", request.body);
// //     fs.readFile("./db/db.json", "utf-8", (err, response) => {
// //         console.log(response);
// //         let allNotes = JSON.parse(response);
        
// //         var lastNote = allNotes[allNotes.length - 1].id;
// //         lastNote = lastNote + 1;
// //         console.log(lastNote);

// //         const newNote = { ...request.body, id: lastNote };
// //         console.log("New Note: ", newNote);
// //         allNotes.push(newNote);
// //         fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
// //             if (err) throw (err);
// //             result.json(allNotes);
// //             console.log("New note has been added: ", allNotes);
// //         });
// //     });
// // });
// // };








// // const fs = require("fs");
// // const path = require("path");

// // // ===============================================================================
// // // ROUTING
// // // ===============================================================================

// // module.exports = function (app) {
// //   // API GET Requests
// //   // Below code handles when users "visit" a page.


// //   app.get("/api/notes", function (req, res) {
// //     fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
// //       if (err) throw err;
// //       console.log(JSON.parse(data));
// //       res.json(JSON.parse(data));
// //     });
// //   });

// //   // API POST Requests
// //   // Below code handles when a user submits a form and thus submits data to the server.

// //   app.post("/api/notes", function (req, res) {
// //     fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
// //       if (err) throw err;
// //       let newNote = req.body;
// //       //let id = Math.floor(Math.random() * 1000);
// //       let notesArr = (JSON.parse(data));
// //       let id = notesArr[notesArr.length - 1].id + 1;
// //       newNote.id = id;
// //       notesArr.push(newNote);
// //       //req.body + `{"id":"${id}"}`);
// //       let notesString = JSON.stringify(notesArr);
// //       console.log(typeof notesString);
// //       fs.writeFileSync(path.join(__dirname, "../db/db.json"), notesString)
// //     });
// //   });

// //   // API DELETE Requests
// //   // Below code handles when a user submits a form and thus submits data to the server.

// //   app.delete("/api/notes/:id", function (req, res) {
// //     fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
// //       if (err) throw err;
// //       console.log(req.params.id);
// //       //console.log(JSON.parse(data));
// //       let notesArr = (JSON.parse(data));
// //       let newNotesArr = []
// //       for (i = 0; i < notesArr.length; i++) {
// //         if (notesArr[i].id != req.params.id) {
// //           newNotesArr.push(notesArr[i]);
// //         }
// //       }
// //       console.log(newNotesArr);
// //       let notesString = JSON.stringify(newNotesArr);
// //       console.log(notesString);
// //       fs.writeFileSync(path.join(__dirname, "../db/db.json"), notesString)
// //     })
// //   })
// // };







// const router = require("express").Router();
// const store = require("../db/store");

// router.get("/notes", (req, res) => {
//     store
//     .getNotes()
//     .then(notes => res.json(notes))
//     .catch(err => res.status(500).json(err));
// });

// router.post("/notes", (req, res) => {
//     console.log(req.body);
//     store
//     .addNote(req.body)
//     .then((note) => res.json(note))
//     .catch(err => res.status(500).json(err));
// });

// router.delete("/notes/:id", function(req, res) {
//     store
//     .removeNote(req.params.id)
//     .then(() => res.json({ ok: true }))
//     .catch(err => res.status(500).json(err));
// });

// module.exports = router;

const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", (req, res) => {
    store
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
    console.log(req.body);
    store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

router.delete("/notes/:id", function(req, res) {
    store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;




// const fs = require('fs');
// const data = require('../db/db.json')

// module.exports = (app) => {
     
//     app.get("/api/notes", (request, result) => {
//         fs.readFile("./db/db.json", "utf-8", (err, notes) => {
//         if (err) throw (err);
//         let notesParsed;
//         try {
//             notesParsed = [].concat(JSON.parse(notes));
//         } catch (err) {
//             notesParsed = [];
//         }
//         result.json(notesParsed);
//     })
// });

// app.delete("/api/notes/:id", (request, result) => {
//     let noteId = request.params.id;
//     console.log("noteId: ", noteId);
    
//     fs.readFile("./db/db.json", "utf-8", (err, response) => {
//         if (err) throw (err);
//         const allNotes = JSON.parse(response);
//         const newNotes = allNotes.filter(note => note.id != noteId);
//         fs.writeFile("./db/db.json", JSON.stringify(newNotes, null, 2),
//             err => {
//                 if (err) throw err;
//                 result.json(true);
//                 console.log('Notes have been deleted!');
//             }
//         );
//       });
//     });

// app.post("/api/notes", (request, result) => {
//     console.log(data, "adding new note", request.body);
//     fs.readFile("./db/db.json", "utf-8", (err, response) => {
//         console.log(response);
//         let allNotes = JSON.parse(response);
        
//         var lastNote = allNotes[allNotes.length - 1].id;
//         lastNote = lastNote + 1;
//         console.log(lastNote);

//         const newNote = { ...request.body, id: lastNote };
//         console.log("New Note: ", newNote);
//         allNotes.push(newNote);
//         fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
//             if (err) throw (err);
//             result.json(allNotes);
//             console.log("New note has been added: ", allNotes);
//         });
//     });
// });
// };