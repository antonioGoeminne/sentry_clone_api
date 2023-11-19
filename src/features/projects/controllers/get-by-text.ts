import { Request, Response } from "express";
import { getAll } from "../../../api/crud";
const { asyncHandler } = require("../../../helpers/asyncHandler");

export const getByText = asyncHandler(async (req: Request, res: Response) => {
  const { text = "" } = req.query;

  const projects = await getAll(
    {
      where: {
        name: {
          search: text.replace(/\s/g, ""),
        },
      },
    },
    "project"
  );

  res.status(200).json(projects);
});
