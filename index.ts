import express, { Express } from "express";
const cors = require("cors");

import dotenv from "dotenv";
import bodyParser from "body-parser";

// CONFIG
dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());

// BUGS
app.use("/api", require("./src/features/bugs/routes"));

// PROJECTS
app.use("/api", require("./src/features/projects/routes"));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
