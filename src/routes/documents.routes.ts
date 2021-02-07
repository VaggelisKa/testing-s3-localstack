import { Router } from 'express';
import { uploadFile } from '../controllers/documents.controller';
import * as multer from 'multer';
import storage from '../middlewares/file-upload';

const upload = multer.default({ storage: storage });

const routes = Router();

routes.post('/upload', upload.single('image'), uploadFile);

export default routes;

