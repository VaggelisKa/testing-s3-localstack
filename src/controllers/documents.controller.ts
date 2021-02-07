import { Response, Request } from 'express';
import { uploadToS3 } from '../aws';

export const uploadFile = async (request: Request, response: Response) => {
  try {
    const awsRes = await uploadToS3(request.file.path, request.file.filename);
    if (!awsRes) new Error('Something bad happened');

    response.status(200).json(awsRes);
  } catch (error) {
    console.log(error);
    response.status(404).json({ message: 'Something went wrong' });
  }
}

