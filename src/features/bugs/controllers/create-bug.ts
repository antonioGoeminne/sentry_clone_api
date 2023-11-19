import { Request, Response } from "express";
import { post } from "../../../api/crud";
import { Bug } from "../types";
const { asyncHandler } = require("../../../helpers/asyncHandler");

export const createBug = asyncHandler(async (req: Request, res: Response) => {
  const { name, status, project_id, date } = req.body;

  const payload: Bug = {
    name,
    status,
    project_id: Number(project_id),
    date: date ? new Date(date) : undefined,
    created_at: new Date(),
  };

  const newBug = await post({ ...payload }, "bug");

  res.status(200).json(newBug);
});
