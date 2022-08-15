import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";


export class CreateSerieController {
  async handle(request: Request, response: Response) {
    const { name, gender, description} = request.body;

    const series = await prismaClient.serie.create({
      data: {
        name,
        gender,
        description,
      },
    });

    return response.json(series);
  }
}
