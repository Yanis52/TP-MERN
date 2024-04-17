import {Router, Request, Response} from 'express';
import DirectorModel, { IDirector } from '../models/IDirector';

const router = Router();

router.get('/api/directors', async (req: Request, res: Response) => {
    try {
        console.log('test');
        const directors = await DirectorModel.find();
        res.status(200).json(directors);
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de la récupération des réalisateurs'});
    }
});

router.get('/api/directors/:id', async (req: Request, res: Response) => {
    try {
        const director = await DirectorModel.findById(req.params.id);
        res.status(200).json(director);
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de la récupération du réalisateur'});
    }
}
);

router.post('/api/directors', async (req: Request, res: Response) => {
    const director: IDirector = req.body;
    const newDirectorPost = new DirectorModel(director);
    try {
        const newDirector = await newDirectorPost.save();
        res.status(201).json(newDirector);
    } catch (err) {
        res.status(400).json({message: 'Erreur lors de la création du réalisateur'});
    }
}
);

router.put('/api/directors/:id', async (req: Request, res: Response) => {
    try {
        const updatedDirector = await DirectorModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedDirector);
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de la mise à jour du réalisateur'});
    }
}
);

router.delete('/api/directors/:id', async (req: Request, res: Response) => {
    try {
        await DirectorModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Réalisateur supprimé'});
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de la suppression du réalisateur'});
    }
}
);






export default router;