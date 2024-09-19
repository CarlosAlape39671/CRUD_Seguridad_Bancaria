import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/personas/:id?', 'PersonasController.find');
    Route.post('/personas', 'PersonasController.create');
    Route.put('/personas/:id', 'PersonasController.update');
    Route.delete('/personas/:id', 'PersonasController.delete');
})
// .middleware(["security"])