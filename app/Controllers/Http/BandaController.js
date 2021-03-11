'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Banda = use("App/Models/Banda")

/**
 * Resourceful controller for interacting with bandas
 */
class BandaController {
  /**
   * Show a list of all bandas.
   * GET bandas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const bandas = await Banda.all();
    return bandas;
  }

  /**
   * Display a single banda.
   * GET bandas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

}

module.exports = BandaController
