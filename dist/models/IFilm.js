"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filmSchema = void 0;
const IDirector_1 = require("./IDirector");
const mongoose_1 = __importDefault(require("mongoose"));
// schemas mongo db
exports.filmSchema = new mongoose_1.default.Schema({
    title: { type: String },
    releaseYear: { type: Number },
    genre: { type: String },
    directors: { type: [IDirector_1.directorSchema] }
});
const FilmModel = mongoose_1.default.model('Film', exports.filmSchema);
exports.default = FilmModel;
