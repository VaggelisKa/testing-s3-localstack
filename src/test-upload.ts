import fs from 'fs';
import path from 'path';
import { uploadFile } from './aws';

export const testUpload = async () => {
  try {
    const filePath = path.resolve(__dirname, './assets/image.png');
    const fileStream = fs.createReadStream(filePath);
    const currentDate = new Date().toISOString();
    const fileName = `test-${currentDate}.png`;
  
    const response = await uploadFile(fileStream, fileName);
    return response;
  } catch (error) {
    console.log(error);
  }
};
