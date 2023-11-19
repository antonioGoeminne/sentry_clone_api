"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const delete_bug_1 = require("../controllers/delete-bug");
const get_bug_1 = require("../controllers/get-bug");
const express = require("express");
const router = express.Router();
const BASE = "/bugs";
// GET BY PROJECT
router.get(BASE + "/:project_id", get_bug_1.getByProject);
// CREATE PROJECT
router.post(BASE + "/project", controllers_1.createProject);
// CREATE BUG
router.post(BASE, controllers_1.createBug);
// UPDATE BUG
router.put(BASE + "/:id", controllers_1.updateBug);
// DELETE BUG
router.delete(BASE + "/:id", delete_bug_1.deleteBug);
module.exports = router;
