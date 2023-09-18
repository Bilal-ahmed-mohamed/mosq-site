const Darsas = require("../models/darsaModels");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");

cloudinary.config({
    cloud_name : 'dxdiozidt',
    api_key:  '315532219354147',
    api_secret : 'TnmzQ0jEgFdAz29xBf2IsQGL_ww',
   });


// get all darsas
const getAllDarsas = async (req,res) => {
  try {
    const dars = await Darsas.findAll();
    res.status(200).json({
        success : true,
        dars,
    });
  } catch (error) {
    res.status(500).json({
        success : false,
        message : "No any darsas there",
    })
  }
  console.log('All darsas : ' , JSON.stringify(getAllDarsas ,null));
}

// create new darsas
const createDarsas = async (req,res) => {
 
      

    try {
        const upload = await cloudinary.uploader.upload(req.file.path, { folder: "Darsas" });
        let newDarsa = {
            title :  req.body.title,
            category : req.body.category,
            Audio : upload.secure_url,
            
        }
        
    if (!newDarsa) {
        return res.status(400).json({
            success : false,
            message : 'All fields must be filled'
        });   
    }
    try {
        const Darsa = await Darsas.create(newDarsa);
        res.status(200).json({
            success : true,
            message : 'new darsa added',
            Darsa,
        });
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "All fields must be requird",
        })
        // console.log(req.body.title);
        // console.log(newDarsa);
    }
        // Rest of your code
      } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Error uploading to Cloudinary" });
      }
      
    
    
        
        // console.log(newDarsa);
        // console.log(req.body);
    }


// get a single darsa

const getAsingleDarsa = async(req,res) => {
    const {id} = req.params;
    if (!id) {
        return res.status({
            success : false,
            message : "darsa not found",
        })
    };
    try {
        const singleDarsa = await Darsas.findOne({where : {id}});
        if (!singleDarsa) {
            return res.status(404).json({
                success : false,
                message : "darsa was not founf",
            })
        }
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "darsa not found",
        });
        console.error('Error:', error.message);
    }
}
// update a darsa

const updateDarsa = async(req,res) => {
    const {id} = req.params;

    const oldDarsa = await Darsa.findOne({where : {id}});
  try {

    let updateOneDarsa ={

        tittle :  tittle.body.tittle,
        category : category.body.category,
        audioClips : result.secure_url,
       }
    
       await Darsa.update(updateOneDarsa , {where : {id : req.param.id}})
       return res.status(200).json({
        success : true,
        oldDarsa : Darsa,
       })

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
   
}
// delete a darsa 
const deleteDarsa = async (req,res) => {
    const {id} = req.param;
    if (!id) {
        return res.status(400).json({
            success : false,
            message : 'Id is not there',
        });
    }
    try {
        const deletedDarsa = await Darsa.findOne({where : {id}});
        res.status(200).json({
            success : true,
            darsaId : id,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
          });
    }
     const deletedTurf = await deletedTurf.destroy({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json();

}

// upload darsa via cloudinary

const uploadAudio = async (req,res) =>{
    const {audiodata} = req.body

    cloudinary.uploader.upload(audiodata , (error , result) => {
        if (error) {
            console.log(error);
            return res.status(400).json({error : 'uplaod failed'});
        }
        res.json({url : result.secure_url});
    })
}
module.exports ={
    getAllDarsas,
    getAsingleDarsa,
    createDarsas,
    updateDarsa,
    deleteDarsa,
    uploadAudio,
};