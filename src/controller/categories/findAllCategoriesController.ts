import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class FindAllCategoryController {
  async handle(request: Request, response: Response) {

    const category = await prismaClient.category.findMany({
    });

    return response.json(category);
  }
}
