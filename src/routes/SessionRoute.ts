import {Router, Request, Response} from 'express';
import SessionModel from '../models/ISession';

const router = Router();


router.get('/api/session', async (req: Request, res: Response) => {
    try {
        const session = SessionModel.find();
        res.status(200).json(session);
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de la récupération des sessions'});
    }
}
);

router.get('/api/session/:id', async (req: Request, res: Response) => {
    try {
        const session = SessionModel.findById(req.params.id);
        res.status(200).json(session);
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de la récupération de la session'});
    }
}
);

router.post('/api/session', async (req: Request, res: Response) => {
    const session = req.body;
    const newSessionPost = new SessionModel(session);
    try {
        const newSession = await newSessionPost.save();
        res.status(201).json(newSession);
    } catch (err) {
        res.status(400).json({message: 'Erreur lors de la création de la session'});
    }
}
);

router.put('/api/session/:id', async (req: Request, res: Response) => {
    try {
        const updatedSession = await SessionModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedSession);

    } catch (err) {
        res.status(500).json({message: 'Erreur lors de la mise à jour de la session'});
    }
}
);

router.delete('/api/session/:id', async (req: Request, res: Response) => {
    try {
        await SessionModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Session supprimée'});
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de la suppression de la session'});
    }
}
);








export default router;