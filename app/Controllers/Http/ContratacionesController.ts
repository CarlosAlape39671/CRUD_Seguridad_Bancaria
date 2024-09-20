import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contratacion from 'App/Models/Contratacion';

export default class ContratacionesController {
    public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return Contratacion.findOrFail(params.id);
    } else {
      const data = request.all();
      if ("page" in data && "per_page" in data) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20);
        return await Contratacion.query().paginate(page, perPage);
      } else {
        return await Contratacion.query();
      }
    }
  }

  public async create({ request }: HttpContextContract) {
    const body = request.only(['con_arma', 'fecha_contratacion', 'codigo_sucursal', 'id_vigilante']);
    const contratacion = await Contratacion.create(body);
    return contratacion;
  }

  public async update({ params, request }: HttpContextContract) {
    const contratacion = await Contratacion.findOrFail(params.id);
    const body = request.only(['con_arma', 'fecha_contratacion', 'codigo_sucursal', 'id_vigilante']);
    contratacion.merge(body);
    return contratacion.save();
  }

  public async delete({ params, response }: HttpContextContract) {
    const contratacion = await Contratacion.findOrFail(params.id);
    await contratacion.delete();
    response.status(204);
  }
}
