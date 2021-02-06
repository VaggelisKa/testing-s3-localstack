"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const documents_controller_1 = require("controllers/documents.controller");
const routes = express_1.Router();
routes.post('/upload', documents_controller_1.uploadFile);
exports.default = routes;
