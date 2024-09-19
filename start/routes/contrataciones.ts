import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/contrataciones/:id?', 'ContratacionesController.find');
    Route.post('/contrataciones', 'ContratacionesController.create');
    Route.put('/contrataciones/:id', 'ContratacionesController.update');
    Route.delete('/contrataciones/:id', 'ContratacionesController.delete');
})
// .middleware(["security"])