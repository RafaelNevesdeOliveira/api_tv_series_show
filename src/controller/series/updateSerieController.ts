import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class UpdateSerieController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, gender, description } = req.body;
    const updateSerie = await prismaClient.serie.update({
      where: {
        id
      },
      data:{
        name,
        gender,
        description,
      }
    });

    return res.json({updateSerie: updateSerie, 'updated': true});
  }
}
