import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class FindSerieCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const serieCategory = await prismaClient.serieCategory.findFirst({
      where: {
        id,
      },
      include: {
        SerieCategory: true
      }
    });

    return response.json(serieCategory);
  }
}
