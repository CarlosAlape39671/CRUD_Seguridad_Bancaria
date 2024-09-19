import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Caso from 'App/Models/Caso';

export default class CasosController {
    
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theCaso: Caso = await Caso.findOrFail(params.id);
            await theCaso.load("atraco")
            await theCaso.load("juez")

            // await theCaso.load("casos", screeningQuery=>{
            //     screeningQuery.preload("theater", theaterQuery=>{
            //         theaterQuery.preload("projector")
            //         .preload("seats")
            //     })
            // })
            return theCaso;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await Caso.query().paginate(page, perPage)
            } else {
                return await Caso.query()
            }

        }

    }

    public async create({ request }: HttpContextContract) {
        const body = request.body();
        const theCaso: Caso = await Caso.create(body);
        return theCaso;
    }

    public async update({ params, request }: HttpContextContract) {
        const theCaso: Caso = await Caso.findOrFail(params.id);
        const body = request.body();
        theCaso.condenado = body.condenado;
        theCaso.tiempoCarcel = body.tiempoCarcel;
        theCaso.juez_id = body.juez_id;
        theCaso.atraco_id = body.atraco_id;
        return await theCaso.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theCaso: Caso = await Caso.findOrFail(params.id);
        response.status(204);
        return await theCaso.delete();
        // await theCaso.load("casos")
        // if (theCaso.casos) {
        //     response.status(400);
        //     return { "message": "No se puede eliminar porque tiene funciones asociadas"}
        // } else {
        //     response.status(204);
        //     return await theCaso.delete();
        // }
    }

}
