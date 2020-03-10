import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("tiny"));
app.use(bodyParser.json());

export const service = app;
