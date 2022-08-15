import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdateSerieCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { id_serie, id_category} = req.body;
    const updateserieCategory = await prismaClient.serieCategory.update({
      where: {
        id
      },
      data:{
        id_serie,
        id_category
      }
    });

    return res.json({updateCategory: updateserieCategory, 'updated': true});
  }
}
