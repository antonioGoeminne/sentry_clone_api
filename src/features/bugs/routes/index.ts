import { createProject, createBug } from "../controllers";
import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

const BASE = "/bugs";

router.get(BASE + "/:project_id", (req: Request, res: Response) =>
  res.status(200).json("hola mundo")
);

// CREATE PROJECT
router.post(BASE + "/project", createProject);

// CREATE BUG
router.post(BASE, createBug);

// router.patch(BASE + "/:id", (req, res) => res.status(200).json("hola mundo"));

// router.delete(BASE + "/:id", (req, res) => res.status(200).json("hola mundo"));
module.exports = router;
