import { Request, Response } from "express";
import { post } from "../../../api/crud";
const { asyncHandler } = require("../../../helpers/asyncHandler");

export const createProject = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, description = "" } = req.body;

    const payload = {
      name,
      description,
      created_at: new Date(),
    };

    const newProject = await post({ ...payload }, "project");

    res.status(200).json(newProject);
  }
);
