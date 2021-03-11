'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Musica = use("App/Models/Musica")
/**
 * Resourceful controller for interacting with musicas
 */
class MusicaController {
  /**
   * Show a list of all musicas.
   * GET musicas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const musicas = Musica.all()
    return musicas
  }

  /**
   * Create/save a new musica.
   * POST musicas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(["nome","genero","album","banda_id"])
    const musica = await Musica.create(data)
    return musica
  }

  /**
   * Display a single musica.
   * GET musicas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params}) {
    const musica = await Musica.findOrFail(params.id)
    return musica
  }


  /**
   * Update musica details.
   * PUT or PATCH musicas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request}) {
    const musica = await Musica.findOrFail(params.id)
    const {nome,genero,album,banda_id} = request.only(["nome","genero","album","banda_id"])
    musica.nome = nome
    musica.genero = genero
    musica.album = album
    musica.banda_id = banda_id
    await musica.save()

    return musica
  }

  /**
   * Delete a musica with id.
   * DELETE musicas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({params}) {
    const musica = await Musica.findOrFail(params.id)
    await musica.delete()
    return musica;
  }
}

module.exports = MusicaController
