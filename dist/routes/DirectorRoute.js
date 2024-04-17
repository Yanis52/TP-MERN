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
const IDirector_1 = __importDefault(require("../models/IDirector"));
const router = (0, express_1.Router)();
router.get('/api/directors', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('test');
        const directors = yield IDirector_1.default.find();
        res.status(200).json(directors);
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des réalisateurs' });
    }
}));
router.get('/api/directors/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const director = yield IDirector_1.default.findById(req.params.id);
        res.status(200).json(director);
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération du réalisateur' });
    }
}));
router.post('/api/directors', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const director = req.body;
    const newDirectorPost = new IDirector_1.default(director);
    try {
        const newDirector = yield newDirectorPost.save();
        res.status(201).json(newDirector);
    }
    catch (err) {
        res.status(400).json({ message: 'Erreur lors de la création du réalisateur' });
    }
}));
router.put('/api/directors/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedDirector = yield IDirector_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedDirector);
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour du réalisateur' });
    }
}));
router.delete('/api/directors/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield IDirector_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Réalisateur supprimé' });
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression du réalisateur' });
    }
}));
exports.default = router;
