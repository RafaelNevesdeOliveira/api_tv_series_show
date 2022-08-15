import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class FindAllSerieCategoryController {
  async handle(request: Request, response: Response) {

    const serieCategory = await prismaClient.serieCategory.findMany({
    });

    return response.json(serieCategory);
  }
}
