import { IFilm } from "./IFilm";

export interface ISession { 
    film: IFilm; 
    date: Date; 
    time: string; 
    availableSeats: number;
    }