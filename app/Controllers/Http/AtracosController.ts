import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Atraco from 'App/Models/Atraco';

export default class AtracosController {

    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            let theAtraco: Atraco = await Atraco.findOrFail(params.id);
            await theAtraco.load("casos")
            await theAtraco.load("atracantes")
            await theAtraco.load("sucursal")
            // await theAtraco.load("casos", screeningQuery=>{
            //     screeningQuery.preload("theater", theaterQuery=>{
            //         theaterQuery.preload("projector")
            //         .preload("seats")
            //     })
            // })
            return theAtraco;
        } else {
            const data = request.all()
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await Atraco.query().paginate(page, perPage)
            } else {
                return await Atraco.query()
            }

        }

    }

    public async create({ request }: HttpContextContract) {
        const body = request.body();
        const theAtraco: Atraco = await Atraco.create(body);
        return theAtraco;
    }

    public async update({ params, request }: HttpContextContract) {
        const theAtraco: Atraco = await Atraco.findOrFail(params.id);
        const body = request.body();
        theAtraco.fechaAtraco = body.fechaAtraco;
        theAtraco.sucursal_id = body.sucursal_id;
        return await theAtraco.save();
    }

    public async delete({ params, response }: HttpContextContract) {
        const theAtraco: Atraco = await Atraco.findOrFail(params.id);
        // response.status(204);
        // return await theAtraco.delete();
        await theAtraco.load("casos")
        await theAtraco.load("atracantes")
        if (theAtraco.casos.length > 0) {
            response.status(400);
            return { "message": "No se puede eliminar porque tiene casos asociados"}
        } else if (theAtraco.atracantes.length > 0) {
            response.status(400);
            return { "message": "No se puede eliminar porque tiene atracantes asociados"}
        } else {
            response.status(204);
            return await theAtraco.delete();
        }
        
    }
    
}
