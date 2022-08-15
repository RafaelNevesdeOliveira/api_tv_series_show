import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;
    const updateCategory = await prismaClient.category.update({
      where: {
        id
      },
      data:{
        name,
      }
    });

    return res.json({updateCategory: updateCategory, 'updated': true});
  }
}
