import {Request, Response} from 'express';
import {prismaClient} from '../../database/prismaClient';

export class CreateSerieCategoryController{
    async handle(request: Request, response: Response){
        const {id_serie, id_category} = request.body;

        const serieCategory = await prismaClient.serieCategory.create({
            data: {
                id_serie,
                id_category
            }
        })

        return response.json(serieCategory)
    }
}