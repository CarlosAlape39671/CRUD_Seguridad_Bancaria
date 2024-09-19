import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Juez from 'App/Models/Juez'

export default class JuezsController {

  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return Juez.findOrFail(params.id);
    } else {
      const data = request.all();
      if ("page" in data && "per_page" in data) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20);
        return await Juez.query().paginate(page, perPage);
      } else {
        return await Juez.query();
      }
    }
  }

  public async create({ request }: HttpContextContract) {
    const body = request.only(['codigoPersona', 'claveInternaJuzgado', 'anosServicio']);
    const juez = await Juez.create(body);
    return juez;
  }

  public async update({ params, request }: HttpContextContract) {
    const juez = await Juez.findOrFail(params.id);
    const body = request.only(['claveInternaJuzgado', 'anosServicio']);
    juez.merge(body);
    return juez.save();
  }

  public async delete({ params, response }: HttpContextContract) {
    const juez = await Juez.findOrFail(params.id);
    await juez.delete();
    response.status(204);
  }
}
