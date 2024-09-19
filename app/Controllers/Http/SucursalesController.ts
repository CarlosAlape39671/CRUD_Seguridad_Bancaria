import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sucursal from 'App/Models/Sucursal';

export default class SucursalesController {
    public async find({ request, params }: HttpContextContract) {
        if (params.codigoSucursal) {
            return Sucursal.findOrFail(params.codigoSucursal);
        } else {
            const data = request.all();
            if ("page" in data && "per_page" in data) {
                const page = request.input('page', 1);
                const perPage = request.input("per_page", 20);
                return await Sucursal.query().paginate(page, perPage);
            } else {
                return await Sucursal.query();
            }
        }
    }
    

    public async create({ request }: HttpContextContract) {
        const body = request.only(['domicilio', 'numeroEmpleados']);
        const sucursal = await Sucursal.create(body);
        return sucursal;
    }

    public async update({ params, request }: HttpContextContract) {
        const sucursal = await Sucursal.findOrFail(params.codigoSucursal);
        const body = request.only(['domicilio', 'numeroEmpleados']);
        sucursal.merge(body);
        return sucursal.save();
    }
    

    public async delete({ params, response }: HttpContextContract) {
        const codigoSucursal = params.codigoSucursal;
    
        if (!codigoSucursal) {
            return response.status(400).json({ message: 'Código de sucursal no proporcionado' });
        }
    
        try {
            const sucursal = await Sucursal.findOrFail(codigoSucursal);
            await sucursal.delete();
            return response.status(200).json({ message: 'Sucursal eliminada' });
        } catch (error) {
            return response.status(404).json({ message: 'Sucursal no encontrada' });
        }
    }
    
}
