import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Banda from 'App/Models/Banda';

export default class BandasController {
    
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theBanda: Banda = await Banda.findOrFail(params.id);
            await theBanda.load("atracantes")

            // await theBanda.load("casos", screeningQuery=>{
            //     screeningQuery.preload("theater", theaterQuery=>{
            //         theaterQuery.preload("projector")
            //         .preload("seats")
            //     })
            // })
            return theBanda;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await Banda.query().paginate(page, perPage)
            } else {
                return await Banda.query()
            }

        }

    }

    public async create({ request }: HttpContextContract) {
        const body = request.body();
        const theBanda: Banda = await Banda.create(body);
        return theBanda;
    }

    public async update({ params, request }: HttpContextContract) {
        const theBanda: Banda = await Banda.findOrFail(params.id);
        const body = request.body();
        theBanda.numeroBanda = body.numeroBanda;
        theBanda.numeroMiembros = body.numeroMiembros;
        return await theBanda.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theBanda: Banda = await Banda.findOrFail(params.id);
        // response.status(204);
        // return await theBanda.delete();

        await theBanda.load("atracantes")
        if (theBanda.atracantes.length > 0) {
            response.status(400);
            return { "message": "No se puede eliminar porque tiene atracantes asociados"}
        } else {
            response.status(204);
            return await theBanda.delete();
        }

    }

}
