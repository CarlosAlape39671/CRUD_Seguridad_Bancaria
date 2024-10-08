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
import './routes/atracantes'
import './routes/juezs'
import './routes/personas'
import './routes/vigilantes'
import './routes/entidadBancarias'
import './routes/sucursales'
import './routes/contrataciones'

