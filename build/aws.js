"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const assert_1 = require("assert");
const ts_dotenv_1 = require("ts-dotenv");
const env = ts_dotenv_1.load({
    AWS_ACCESS_KEY_ID: String,
    AWS_SECRET_KEY: String,
    AWS_BUCKET_NAME: String
});
assert_1.strict.ok(env.AWS_ACCESS_KEY_ID === 'test');
assert_1.strict.ok(env.AWS_SECRET_KEY === 'test');
assert_1.strict.ok(env.AWS_BUCKET_NAME === 'custom-bucket');
const credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY
};
const useLocal = process.env.NODE_ENV !== 'production';
const bucketName = process.env.AWS_BUCKET_NAME;
const s3client = new aws_sdk_1.default.S3({
    credentials,
    endpoint: useLocal ? 'http://localhost:4566' : undefined,
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
