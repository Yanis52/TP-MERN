import mongoose from "mongoose";
import { filmSchema, IFilm } from "./IFilm";

export interface ISession extends Document{ 
    film: IFilm; 
    date: Date; 
    time: string; 
    availableSeats: number;
    }


export const sessionSchema = new mongoose.Schema({
    film: {type: filmSchema},
    date: {type: Date},
    time: {type: String},
    availableSeats: {type: Number}
});

const SessionModel=  mongoose.model<ISession>('Session', sessionSchema);
export default SessionModel;