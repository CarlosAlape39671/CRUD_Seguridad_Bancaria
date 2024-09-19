/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
import './routes/atracos'
import './routes/bandas'
import './routes/casos'

// Rutas para Persona
Route.get('/personas/:id?', 'PersonasController.find')
Route.post('/personas', 'PersonasController.create')
Route.put('/personas/:id', 'PersonasController.update')
Route.delete('/personas/:id', 'PersonasController.delete')

// Rutas para Juez
Route.get('/jueces/:id?', 'JuezsController.find')
Route.post('/jueces', 'JuezsController.create')
Route.put('/jueces/:id', 'JuezsController.update')
Route.delete('/jueces/:id', 'JuezsController.delete')

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
