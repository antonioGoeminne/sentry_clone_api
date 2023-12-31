"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
// CONFIG
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(cors());
app.use(body_parser_1.default.json());
// BUGS
app.use("/api", require("./src/features/bugs/routes"));
// PROJECTS
app.use("/api", require("./src/features/projects/routes"));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
