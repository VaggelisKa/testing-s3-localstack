"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testUpload = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const aws_1 = require("../aws");
const testUpload = async (imageLocation) => {
    try {
        const filePath = path_1.default.resolve(__dirname, imageLocation);
        const fileStream = fs_1.default.createReadStream(filePath);
        const currentDate = new Date().toISOString();
        const fileName = `test-${currentDate}.png`;
        const response = await aws_1.uploadFile(fileStream, fileName);
        return response;
    }
    catch (error) {
        console.log(error);
    }
};
exports.testUpload = testUpload;
