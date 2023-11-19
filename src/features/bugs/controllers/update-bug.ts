import { Request, Response } from "express";
import { update } from "../../../api/crud";
const { asyncHandler } = require("../../../helpers/asyncHandler");

export const updateBug = asyncHandler(async (req: Request, res: Response) => {
  const { name, status } = req.body;
  const { id } = req.params;

  const payload = {
    name,
    status,
    updated_at: new Date(),
  };

  await update({ ...payload }, { where: { id } }, "bug");

  res.status(200).json("Bug updated");
});
