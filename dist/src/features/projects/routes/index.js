"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const express = require("express");
const router = express.Router();
const BASE = "/projects";
// GET ALL
router.get(BASE + "/all", controllers_1.getAllProjects);
module.exports = router;
