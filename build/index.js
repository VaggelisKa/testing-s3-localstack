"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const documents_routes_1 = __importDefault(require("routes/documents.routes"));
const app = express_1.default();
app.use(documents_routes_1.default);
app.listen(8000, async () => {
    console.log('App is live');
});
