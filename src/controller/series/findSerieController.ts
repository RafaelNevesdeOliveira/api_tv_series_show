import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class FindSerieController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const serie = await prismaClient.serie.findFirst({
      where: {
        id,
      },
    });

    return response.json(serie);
  }
}
