import {Router, Request, Response} from 'express';
import FilmModel from '../models/IFilm';

const router = Router();

router.get('/api/films', async (req: Request, res: Response) => {
    try {
        const films = await FilmModel.find();
        res.status(200).json(films);
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de la récupération des films'});
    }
}
);

router.get('/api/films/:id', async (req: Request, res: Response) => {
    try {
        const film = await FilmModel.findById(req.params.id);
        res.status(200).json(film);
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de la récupération du film'});
    }
}
);

router.post('/api/films', async (req: Request, res: Response) => {
    const film = req.body;
    const newFilmPost = new FilmModel(film);
    try {
        const newFilm = await newFilmPost.save();
        res.status(201).json(newFilm);
    } catch (err) {
        res.status(400).json({message: 'Erreur lors de la création du film'});
    }
}
);

router.put('/api/films/:id', async (req: Request, res: Response) => {
    try {
        const updatedFilm = await FilmModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedFilm);
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de la mise à jour du film'});
    }
}
);

router.delete('/api/films/:id', async (req: Request, res: Response) => {
    try {
        await FilmModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Film supprimé'});
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de la suppression du film'});
    }
}
);


export default router;