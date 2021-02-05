import express from 'express';
import { testUpload } from './test-upload';

const app = express();
app.listen(8000, async () => {  
  const awsRes = await testUpload();
  console.log(awsRes);
});
