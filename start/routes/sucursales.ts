import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/sucursales/:codigoSucursal?', 'SucursalesController.find');
    Route.post('/sucursales', 'SucursalesController.create');
    Route.put('/sucursales/:codigoSucursal', 'SucursalesController.update');
    Route.delete('/sucursales/:codigoSucursal', 'SucursalesController.delete');
})
// .middleware(["security"])