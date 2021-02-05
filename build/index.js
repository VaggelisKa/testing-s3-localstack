"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_upload_1 = require("./test-upload");
const app = express_1.default();
app.listen(8000, async () => {
    console.log('server listens to port 8000');
    const awsRes = await test_upload_1.testUpload();
    console.log(awsRes);
});
