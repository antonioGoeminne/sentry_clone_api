import { Request, Response } from "express";
import { deleteData } from "../../../api/crud";
const { asyncHandler } = require("../../../helpers/asyncHandler");

export const deleteBug = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteData({ where: id }, "bug");
  res.status(200).json('Bug deleted')
});
