"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Banda = use("App/Models/Banda");
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
  async index({ request, response, view }) {
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
  async show({ params, request, response, view }) {
    const banda = await Banda.findOrFail(params.id);
    return banda;
  }

  /**
   * Create/save a new musica.
   * POST bandas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only(["nome"]);
      const banda = await Banda.create(data);
      return banda;
    } catch (error) {
      response.status(500).send("Erro ao inserir banda!");
    }
  }

  /**
   * Update musica details.
   * PUT or PATCH bandas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const banda = await Banda.findOrFail(params.id);
      const { nome } = request.only(["nome"]);
      banda.nome = nome;
      await banda.save();
      return banda;
    } catch (error) {
      response.status(500).send("Erro ao atualizar a banda!");
    }
  }

  /**
   * Delete a musica with id.
   * DELETE bandas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const banda = await Banda.findOrFail(params.id);
      await banda.delete();
      return banda;
    } catch (error) {
      response.status(500).send("Erro ao apagar a banda!");
    }
  }
}

module.exports = BandaController;
