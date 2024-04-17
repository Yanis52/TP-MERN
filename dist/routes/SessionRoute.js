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
const ISession_1 = __importDefault(require("../models/ISession"));
const router = (0, express_1.Router)();
router.get('/api/session', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const session = yield ISession_1.default.find();
        res.status(200).json(session);
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération des sessions' });
    }
}));
router.get('/api/session/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const session = yield ISession_1.default.findById(req.params.id);
        res.status(200).json(session);
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération de la session' });
    }
}));
router.post('/api/session', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = req.body;
    const newSessionPost = new ISession_1.default(session);
    try {
        const newSession = yield newSessionPost.save();
        res.status(201).json(newSession);
    }
    catch (err) {
        res.status(400).json({ message: 'Erreur lors de la création de la session' });
    }
}));
router.put('/api/session/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedSession = yield ISession_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedSession);
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de la session' });
    }
}));
router.delete('/api/session/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ISession_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Session supprimée' });
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur lors de la suppression de la session' });
    }
}));
exports.default = router;
