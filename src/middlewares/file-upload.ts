import * as multer from 'multer';
import * as path from 'path';

const MIME_TYPE_MAP: { [imageType: string]: string } = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
  destination: (req: any, file: any, callback) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error: Error | null = new Error("invalid mime type");
    if (isValid) { error = null };

    callback(error, path.join(__dirname, '../assets/'));
  },

  filename: (req: any, file: any, callback) => {
    // const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    callback(null, file.fieldname + '-' + new Date().toISOString() + '.' + ext);
  }
});

export default storage;
