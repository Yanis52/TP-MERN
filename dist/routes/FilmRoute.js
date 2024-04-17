"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IFilm_1 = __importDefault(require("../models/IFilm"));
const router = (0, express_1.Router)();
router.get('/api/films', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const films = yield IFilm_1.default.find();
        res.status(200).json(films);
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des films' });
    }
}));
router.get('/api/films/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const film = yield IFilm_1.default.findById(req.params.id);
        res.status(200).json(film);
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération du film' });
    }
}));
router.post('/api/films', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const film = req.body;
    const newFilmPost = new IFilm_1.default(film);
    try {
        const newFilm = yield newFilmPost.save();
        res.status(201).json(newFilm);
    }
    catch (err) {
        res.status(400).json({ message: 'Erreur lors de la création du film' });
    }
}));
router.put('/api/films/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedFilm = yield IFilm_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedFilm);
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour du film' });
    }
}));
router.delete('/api/films/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield IFilm_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Film supprimé' });
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression du film' });
    }
}));
exports.default = router;
