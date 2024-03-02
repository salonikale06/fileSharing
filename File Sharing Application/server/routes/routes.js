import express from 'express';
import {uploadImage , downloadImage} from '../controller/image-controller.js';
import uploadMiddleware from '../middlewares/uploadMiddleware.js';

const routes = express.Router();

routes.post('/upload' , uploadMiddleware.single('file') , uploadImage);
routes.get('/file/:fileId' , downloadImage);

export default routes;