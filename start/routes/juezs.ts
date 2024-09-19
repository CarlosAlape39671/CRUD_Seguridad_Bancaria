import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/jueces/:id?', 'JuezsController.find');
    Route.post('/jueces', 'JuezsController.create');
    Route.put('/jueces/:id', 'JuezsController.update');
    Route.delete('/jueces/:id', 'JuezsController.delete');
})
// .middleware(["security"])