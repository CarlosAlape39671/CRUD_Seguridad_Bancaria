import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Entidadbancaria from 'App/Models/Entidadbancaria';

export default class EntidadBancariasController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
          return Entidadbancaria.findOrFail(params.id);
        } else {
          const data = request.all();
          if ("page" in data && "per_page" in data) {
            const page = request.input('page', 1);
            const perPage = request.input("per_page", 20);
            return await Entidadbancaria.query().paginate(page, perPage);
          } else {
            return await Entidadbancaria.query();
          }
        }
      }
    
      public async create({ request }: HttpContextContract) {
        const body = request.only(['codigoEntidad', 'domicilio']);
        const entidadBancaria = await Entidadbancaria.create(body);
        return entidadBancaria;
      }
    
      public async update({ params, request }: HttpContextContract) {
        const entidadBancaria = await Entidadbancaria.findOrFail(params.codigoEntidad);
        const body = request.only(['domicilio']); // Solo incluye los campos que quieres actualizar
        entidadBancaria.merge(body);
        await entidadBancaria.save();
      
        return entidadBancaria;
      }
      
      public async delete({ params, response }: HttpContextContract) {
        const codigoEntidad = params.codigoEntidad; // Asegúrate de que el parámetro sea `codigoEntidad`
    
        if (!codigoEntidad) {
            return response.status(400).json({ message: 'Código de entidad bancaria no proporcionado' });
        }
    
        try {
            // Busca la entidad bancaria usando `codigoEntidad`
            const entidadBancaria = await Entidadbancaria.findOrFail(codigoEntidad);
            await entidadBancaria.delete();
            return response.status(204)
        } catch (error) {
            return response.status(404).json({ message: 'Entidad bancaria no encontrada' });
        }
    }    
}
