"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const test_upload_1 = require("utils/test-upload");
const uploadFile = async (request, response) => {
    try {
        const { fileLocation } = request.body;
        if (!fileLocation)
            throw new Error();
        const awsRes = await test_upload_1.testUpload(fileLocation);
        if (!awsRes)
            throw new Error('Something bad happened');
        response.status(200).json(awsRes);
    }
    catch (error) {
        console.log(error);
        response.status(401);
    }
};
exports.uploadFile = uploadFile;
