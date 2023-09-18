const express = require("express");
const {
    getAllDarsas,
    getAsingleDarsa,
    createDarsas,
    updateDarsa,
    deleteDarsa,
} = require("../controllers/darsaController");

const uploadAudio = require("../config/multer");
const router = express.Router();


// get all darsas
router.get('/' , getAllDarsas)

// get a single darsa
router.get('/:id' , getAsingleDarsa)

// posting new a darsa
router.post('/' ,  uploadAudio , createDarsas  );

// delete a darsa
router.delete('/:id' , deleteDarsa)

// update a darsa
router.patch('/:id' , updateDarsa);

module.exports = router;