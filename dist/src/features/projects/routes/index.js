"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const express = require("express");
const router = express.Router();
const BASE = "/projects";
// GET ALL
router.get(BASE + "/all", controllers_1.getAllProjects);
// GET SEARCH TEXT
router.get(BASE, controllers_1.getByText);
module.exports = router;
