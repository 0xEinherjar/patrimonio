import { config } from "dotenv";
import express from "express";
import cors from "cors";
import router from "./router.js";
const PORT = process.env.PORT || 3000;
const app = express();
config();

app.use(express.json());
app.use(cors());
app.use(router);
app.listen(PORT);