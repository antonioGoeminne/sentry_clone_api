"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.getAndCountAll = exports.getAll = exports.getOne = exports.post = void 0;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const post = (data, model) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma[model].create({ data: Object.assign({}, data) });
});
exports.post = post;
const getOne = (where, model) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma[model].findFirst(Object.assign({}, where));
});
exports.getOne = getOne;
const getAll = (where, model) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma[model].findMany(Object.assign({}, where));
});
exports.getAll = getAll;
const getAndCountAll = (where, model, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { skip, first } = options;
    return yield prisma[model].findMany(Object.assign(Object.assign({}, where), { skip,
        first }));
});
exports.getAndCountAll = getAndCountAll;
const update = (data, where, model) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma[model].update(Object.assign(Object.assign({}, where), { data }));
});
exports.update = update;
