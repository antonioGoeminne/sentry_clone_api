import { Request, Response } from "express";
import { getAll } from "../../../api/crud";
const { asyncHandler } = require("../../../helpers/asyncHandler");

export const getAllProjects = asyncHandler(
  async (req: Request, res: Response) => {
    const newProject = await getAll({ where: {} }, "project");

    res.status(200).json(newProject);
  }
);
