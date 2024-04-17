import e from "express";
import { directorSchema, IDirector } from "./IDirector";
import mongoose from 'mongoose';

export interface IFilm extends Document{ 
    title: string; 
    releaseYear: number; 
    genre: string; 
    directors: IDirector[];
    }

// schemas mongo db
export const filmSchema = new mongoose.Schema({
    title: {type: String},
    releaseYear: {type: Number},
    genre: {type: String},
    directors: {type: [directorSchema]}
});

const FilmModel=  mongoose.model<IFilm>('Film', filmSchema);
export default FilmModel;