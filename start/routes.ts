import Route from '@ioc:Adonis/Core/Route'

// Rutas para Persona
Route.get('/personas/:id?', 'PersonasController.find')
Route.post('/personas', 'PersonasController.create')
Route.put('/personas/:id', 'PersonasController.update')
Route.delete('/personas/:id', 'PersonasController.delete')

// Rutas para Juez
Route.get('/jueces/:id?', 'JuecesController.find')
Route.post('/jueces', 'JuecesController.create')
Route.put('/jueces/:id', 'JuecesController.update')
Route.delete('/jueces/:id', 'JuecesController.delete')

// Rutas para Atracante
Route.get('/atracantes/:id?', 'AtracantesController.find')
Route.post('/atracantes', 'AtracantesController.create')
Route.put('/atracantes/:id', 'AtracantesController.update')
Route.delete('/atracantes/:id', 'AtracantesController.delete')

// Rutas para Vigilante
Route.get('/vigilantes/:id?', 'VigilantesController.find')
Route.post('/vigilantes', 'VigilantesController.create')
Route.put('/vigilantes/:id', 'VigilantesController.update')
Route.delete('/vigilantes/:id', 'VigilantesController.delete')
