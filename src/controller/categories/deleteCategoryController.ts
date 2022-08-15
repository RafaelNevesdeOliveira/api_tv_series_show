import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const category = await prismaClient.category.delete({
      where: {
        id,
      },
    });

    return response.json(category);
  }
}
