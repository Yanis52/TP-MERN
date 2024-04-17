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
const express_1 = __importDefault(require("express"));
const DirectorRoute_1 = __importDefault(require("./routes/DirectorRoute"));
const FilmRoute_1 = __importDefault(require("./routes/FilmRoute"));
const SessionRoute_1 = __importDefault(require("./routes/SessionRoute"));
const mongoose_1 = __importDefault(require("mongoose"));
const uri = "mongodb+srv://yanis:root@cluster0.kdc5xtk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        yield mongoose_1.default.connect(uri);
        yield mongoose_1.default.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    });
}
run().catch(console.dir);
const app = (0, express_1.default)();
const PORT = 3002;
app.use(express_1.default.json());
app.use('/', DirectorRoute_1.default);
app.use('/', FilmRoute_1.default);
app.use('/', SessionRoute_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
