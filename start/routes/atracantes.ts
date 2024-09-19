import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/atracantes/:id?', 'AtracantesController.find');
    Route.post('/atracantes', 'AtracantesController.create');
    Route.put('/atracantes/:id', 'AtracantesController.update');
    Route.delete('/atracantes/:id', 'AtracantesController.delete');
})
// .middleware(["security"])