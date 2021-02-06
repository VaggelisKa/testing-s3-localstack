import { Router } from 'express';
import { uploadFile } from '../controllers/documents.controller';

const routes = Router();

routes.post('/upload', uploadFile);

export default routes;

