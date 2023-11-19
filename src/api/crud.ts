const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export const post = async (data: any, model: any) => {
  return await prisma[model].create({ data: { ...data } });
};

export const getOne = async (where: any, model: any) => {
  return await prisma[model].findFirst({
    ...where,
  });
};

export const getAll = async (where: any, model: any) => {
  return await prisma[model].findMany({
    ...where,
  });
};

export const getAndCountAll = async (where: any, model: any, options: any) => {
  const { skip, take } = options || {};
  return await prisma[model].findMany({
    ...where,
    skip,
    take,
  });
};

export const update = async (data: any, where: any, model: any) => {
  return await prisma[model].update({ ...where, data });
};

export const deleteData = async (where: any, model: any) => {
  return await prisma[model].delete({ ...where });
};
