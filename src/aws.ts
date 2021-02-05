import AWS, { Credentials } from 'aws-sdk';
import https from 'https';

import { strict as assert } from 'assert';
import { load } from 'ts-dotenv';

// TODO create env.ts later

// const env = load({
//   AWS_ACCESS_KEY_ID: String,
//   AWS_SECRET_KEY: String,
//   AWS_BUCKET_NAME: String
// });

// assert.ok(env.AWS_ACCESS_KEY_ID === 'test');
// assert.ok(env.AWS_SECRET_KEY === 'test');
// assert.ok(env.AWS_BUCKET_NAME === 'custom-bucket');

AWS.config.update({ httpOptions: { agent: new https.Agent({ rejectUnauthorized: false }) } });

const credentials: Pick<Credentials, 'accessKeyId' | 'secretAccessKey'> = {
  accessKeyId: 'test',
  secretAccessKey: 'test'
};

const bucketName = 'demo-bucket';

const s3client = new AWS.S3({
  credentials,
  endpoint: 'host.docker.internal:4566',
  region: 'eu-west-3',
  s3ForcePathStyle: true
})

export const uploadFile = async (data: any, fileName: string) => (
  new Promise((resolve) => {
    s3client.upload(
      {
        Bucket: bucketName,
        Key: fileName,
        Body: data
      },
      (err: any, res: any) => {
        if (err) throw err;
        resolve(res);
      }
    )
  })
);


