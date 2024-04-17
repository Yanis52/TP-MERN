"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.directorSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.directorSchema = new mongoose_1.default.Schema({
    name: { type: String },
    birthDate: { type: Date },
    biography: { type: String }
});
const DirectorModel = mongoose_1.default.model('Director', exports.directorSchema);
exports.default = DirectorModel;
