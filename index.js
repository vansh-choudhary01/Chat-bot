import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from "ejs";
import cors from "cors"

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine('html', ejs.renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "/"));
app.use(cors());

app.get("/", (req, res) => {
    res.send("hellow i'm backend");
})

app.listen(8080, () => {
    console.log("app is listening on port 8080");
})