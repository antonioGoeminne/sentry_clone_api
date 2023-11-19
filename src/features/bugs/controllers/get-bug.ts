import { Request, Response } from "express";
import { getAndCountAll } from "../../../api/crud";
const { asyncHandler } = require("../../../helpers/asyncHandler");

export const getByProject = asyncHandler(
  async (req: Request, res: Response) => {
    const { project_id, skip = 0, take = 10 } = req.params;

    const bugs = await getAndCountAll(
      {
        where: {
          ...(project_id === "allProjects"
            ? {}
            : {
                project_id: Number(project_id),
              }),
        },
      },
      "bug",
      {
        skip,
        take,
      }
    );
    res.status(200).json(bugs);
  }
);
