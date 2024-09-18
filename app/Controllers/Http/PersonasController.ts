import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Persona from 'App/Models/Persona'

export default class PersonasController {

  // Buscar una persona por ID o listar todas
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return Persona.findOrFail(params.id);
    } else {
      const data = request.all();
      if ("page" in data && "per_page" in data) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20);
        return await Persona.query().paginate(page, perPage);
      } else {
        return await Persona.query();
      }
    }
  }

  // Crear una nueva persona
  public async create({ request }: HttpContextContract) {
    const body = request.only(['codigoPersona', 'edad', 'nombreCompleto']);
    const persona = await Persona.create(body);
    return persona;
  }

  // Actualizar una persona existente
  public async update({ params, request }: HttpContextContract) {
    const persona = await Persona.findOrFail(params.id);
    const body = request.only(['codigoPersona', 'edad', 'nombreCompleto']);
    persona.merge(body);
    return persona.save();
  }

  // Eliminar una persona
  public async delete({ params, response }: HttpContextContract) {
    const persona = await Persona.findOrFail(params.id);
    await persona.delete();
    response.status(204);
  }
}
