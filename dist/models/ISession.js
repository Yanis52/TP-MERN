"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const IFilm_1 = require("./IFilm");
exports.sessionSchema = new mongoose_1.default.Schema({
    film: { type: IFilm_1.filmSchema },
    date: { type: Date },
    time: { type: String },
    availableSeats: { type: Number }
});
const SessionModel = mongoose_1.default.model('Session', exports.sessionSchema);
exports.default = SessionModel;
