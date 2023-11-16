import express, { Express } from "express";

import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// BUGS
app.use(bodyParser.json());
app.use("/api", require("./src/features/bugs/routes"));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
