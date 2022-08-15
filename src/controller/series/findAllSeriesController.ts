import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class FindAllSerieController {
  async handle(request: Request, response: Response) {

    const serie = await prismaClient.serie.findMany({
    });

    return response.json(serie);
  }
}
