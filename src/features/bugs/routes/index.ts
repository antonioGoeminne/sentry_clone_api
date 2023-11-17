import { createProject, createBug, updateBug } from "../controllers";
import { deleteBug } from "../controllers/delete-bug";
import { getByProject } from "../controllers/get-bug";

const express = require("express");
const router = express.Router();

const BASE = "/bugs";

// GET BY PROJECT
router.get(BASE + "/:project_id", getByProject);

// CREATE PROJECT
router.post(BASE + "/project", createProject);

// CREATE BUG
router.post(BASE, createBug);

// UPDATE BUG
router.put(BASE + "/:id", updateBug);

// DELETE BUG
router.delete(BASE + "/:id", deleteBug);

module.exports = router;
