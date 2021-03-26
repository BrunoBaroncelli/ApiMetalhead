'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Metalhead' }
})

Route.post('/register','AuthController.register')
Route.post('/authenticate','AuthController.authenticate')

Route.get('/bandas','BandaController.index')
Route.get('/musicas/:id/bandas', 'MusicaController.bandas')

Route.group(() => {
  Route.resource('/musicas','MusicaController').apiOnly()
  Route.resource("bandas", "BandaController").only([
    "show",
    "store",
    "update",
    "destroy",
  ]);
}).middleware(["auth"])
