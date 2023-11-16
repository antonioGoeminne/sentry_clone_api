"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const express = require("express");
const router = express.Router();
const BASE = "/bugs";
router.get(BASE + "/:project_id", (req, res) => res.status(200).json("hola mundo"));
// CREATE PROJECT
router.post(BASE + "/project", controllers_1.createProject);
// CREATE BUG
router.post(BASE, controllers_1.createBug);
// router.patch(BASE + "/:id", (req, res) => res.status(200).json("hola mundo"));
// router.delete(BASE + "/:id", (req, res) => res.status(200).json("hola mundo"));
module.exports = router;
