import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/vigilantes/:id?', 'VigilantesController.find');
    Route.post('/vigilantes', 'VigilantesController.create');
    Route.put('/vigilantes/:id', 'VigilantesController.update');
    Route.delete('/vigilantes/:id', 'VigilantesController.delete');
})
// .middleware(["security"])