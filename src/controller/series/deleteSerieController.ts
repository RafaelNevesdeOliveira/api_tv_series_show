import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class DeleteSerieController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const serie = await prismaClient.serie.delete({
      where: {
        id,
      },
    });

    return response.json(serie);
  }
}
