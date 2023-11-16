import { NextFunction, Request, Response } from "express";

type AsyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => (req: Request, res: Response, next: NextFunction) => Promise<void>;

const asyncHandler: AsyncHandler = (asyncFn) => async (req, res, next) => {
  try {
    await asyncFn(req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = { asyncHandler };
