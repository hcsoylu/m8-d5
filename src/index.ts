import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Accommodation from "./routes/";
dotenv.config();

const app: Express = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(Accommodation);

const url: any = process.env.MONGO_URL;

console.log(url);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(PORT, () => console.log(`app running on port ${PORT}`))
  )
  .catch((err) => console.log(err));
