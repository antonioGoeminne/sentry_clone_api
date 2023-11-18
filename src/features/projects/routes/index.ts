import { getAllProjects } from "../controllers";

const express = require("express");
const router = express.Router();

const BASE = "/projects";

// GET ALL
router.get(BASE + "/all", getAllProjects);

module.exports = router;
