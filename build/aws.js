"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const https_1 = __importDefault(require("https"));
// TODO create env.ts later
// const env = load({
//   AWS_ACCESS_KEY_ID: String,
//   AWS_SECRET_KEY: String,
//   AWS_BUCKET_NAME: String
// });
// assert.ok(env.AWS_ACCESS_KEY_ID === 'test');
// assert.ok(env.AWS_SECRET_KEY === 'test');
// assert.ok(env.AWS_BUCKET_NAME === 'custom-bucket');
aws_sdk_1.default.config.update({ httpOptions: { agent: new https_1.default.Agent({ rejectUnauthorized: false }) } });
const credentials = {
    accessKeyId: 'test',
    secretAccessKey: 'test'
};
const bucketName = 'demo-bucket';
const s3client = new aws_sdk_1.default.S3({
    credentials,
    endpoint: 'host.docker.internal:4566',
    region: 'eu-west-3',
    s3ForcePathStyle: true
});
const uploadFile = async (data, fileName) => (new Promise((resolve) => {
    s3client.upload({
        Bucket: bucketName,
        Key: fileName,
        Body: data
    }, (err, res) => {
        if (err)
            throw err;
        resolve(res);
    });
}));
exports.uploadFile = uploadFile;
