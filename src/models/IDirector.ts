import mongoose from "mongoose";

export interface IDirector extends Document{ 
    name: string; 
    birthDate: Date; 
    biography: string;
    }

export const directorSchema = new mongoose.Schema({
    name: {type: String},
    birthDate: {type: Date},
    biography: {type: String}
});

const DirectorModel =  mongoose.model<IDirector>('Director', directorSchema);
export default DirectorModel;