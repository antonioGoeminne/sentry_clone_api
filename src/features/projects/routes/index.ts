import { getAllProjects, getByText } from "../controllers";

const express = require("express");
const router = express.Router();

const BASE = "/projects";

// GET ALL
router.get(BASE + "/all", getAllProjects);

// GET SEARCH TEXT
router.get(BASE, getByText);

module.exports = router;
