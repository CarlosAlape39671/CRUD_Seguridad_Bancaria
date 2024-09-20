// app/Controllers/Http/AtracantesController.ts
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Atracante from 'App/Models/Atracante'

export default class AtracantesController {

  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return Atracante.findOrFail(params.id);
    } else {
      const data = request.all();
      if ("page" in data && "per_page" in data) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20);
        return await Atracante.query().paginate(page, perPage);
      } else {
        return await Atracante.query();
      }
    }
  }

  public async create({ request }: HttpContextContract) {
    const body = request.only(['banda_id','atraco_id', 'codigo_persona', 'antecedente']);
    const atracante = await Atracante.create(body);
    return atracante;
  }

  public async update({ params, request }: HttpContextContract) {
    const atracante = await Atracante.findOrFail(params.id);
    const body = request.only(['banda_id','atraco_id', 'codigoPersona', 'antecedente']);
    atracante.merge(body);
    return atracante.save();
  }

  public async delete({ params, response }: HttpContextContract) {
    const atracante = await Atracante.findOrFail(params.id);
    await atracante.delete();
    response.status(204);
  }
}
