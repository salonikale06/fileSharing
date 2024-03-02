import fileModel from '../models/fileModel.js';

export const uploadImage = async (req,res) =>{

    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    }
    try {
        const file = await fileModel.create(fileObj);
        console.log(file);
        res.status(200).json({path:`http://localhost:8000/file/${file._id}`})
        
    } catch (error) {
        console.error("Controller Issue",error);
        res.status(500).json({error : error.message});
    }
}

export const downloadImage = async (req,res) => {
    try {
      const file = await fileModel.findById(req.params.fileId);
      console.log(file,"salonifile");
      file.downloadContent++;

      await file.save();
      res.download(file.path,file.name);

    } catch (error) {
        console.log(error.message,"download error");
        res.status(500).json({error : error.message});

    }
}