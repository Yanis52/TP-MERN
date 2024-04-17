import express, { Application, Request,Response } from 'express';
import DirectorRoute from './routes/DirectorRoute';
import FilmRoute from './routes/FilmRoute';
import SessionRoute from './routes/SessionRoute';
import mongoose, { Schema } from 'mongoose';


const uri = "mongodb+srv://yanis:root@cluster0.kdc5xtk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
 
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  
}
run().catch(console.dir);

const app: Application = express()

const PORT = 3002;


app.use(express.json());
app.use('/',DirectorRoute);
app.use('/',FilmRoute);
app.use('/',SessionRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})