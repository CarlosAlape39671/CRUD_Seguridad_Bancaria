// app/Controllers/Http/VigilantesController.ts
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Vigilante from 'App/Models/Vigilante'

export default class VigilantesController {

  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return Vigilante.findOrFail(params.id);
    } else {
      const data = request.all();
      if ("page" in data && "per_page" in data) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20);
        return await Vigilante.query().paginate(page, perPage);
      } else {
        return await Vigilante.query();
      }
    }
  }

  public async create({ request }: HttpContextContract) {
    const body = request.only(['codigoPersona', 'anosExperiencia']);
    const vigilante = await Vigilante.create(body);
    return vigilante;
  }

  public async update({ params, request }: HttpContextContract) {
    const vigilante = await Vigilante.findOrFail(params.id);
    const body = request.only(['anosExperiencia']);
    vigilante.merge(body);
    return vigilante.save();
  }

  public async delete({ params, response }: HttpContextContract) {
    const vigilante = await Vigilante.findOrFail(params.id);
    await vigilante.delete();
    response.status(204);
  }
}
