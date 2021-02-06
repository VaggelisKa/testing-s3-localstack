import { FileUploadResponse } from "models/fileRes";
import { Response, Request } from 'express';
import { testUpload } from "../utils/test-upload";

export const uploadFile = async (request: Request, response: Response) => {
  try {
    const { fileLocation } = request.body;
    if (!fileLocation) throw new Error('No file was selected');

    const awsRes = await testUpload(fileLocation);
    if (!awsRes) throw new Error('Something bad happened');

    response.status(200).json(awsRes);
  } catch (error) {
    console.log(error);
    response.status(404).json(error);
  }
}

