import { IDirector } from "./IDirector";

export interface IFilm { 
    title: string; 
    releaseYear: number; 
    genre: string; 
    directors: IDirector[];
    }