const multer = require("multer");
const path = require("path");

const uploadAudio = multer({
  storage: multer.diskStorage({}),
  fileFilter : (req,file,cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".mp3" && ext !== ".wav" && ext !== ".ogg"){
      
    cb(new Error("file not suppported") , false);
    return;

    }
    cb(null , true);

  },
  
}).single("Audio");

module.exports = uploadAudio;