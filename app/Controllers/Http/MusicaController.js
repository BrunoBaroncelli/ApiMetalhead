"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Musica = use("App/Models/Musica");
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
  async index() {
    const musicas = await Musica.query().with(["banda"]).fetch();
    return musicas;
  }

  /**
   * Create/save a new musica.
   * POST musicas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only(["banda_id", "musica_nome", "genero", "album"]);
      // console.log(auth.user.id);
      const musica = await Musica.create(data);
      return musica;
    } catch (error) {
      response.status(500).send("Erro ao inserir musica!");
    }
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
  async show({ params, request, response, view }) {
    const musica = await Musica.findOrFail(params.id);
    return musica;
    // const musica = await Musica.query().where("banda_id", params.id).fetch();
    // return musica;
  }

  /**
   * Display musicas of bandas.
   * GET musicas/:id/bandas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async bandas({ params, request, response, view }) {
    // const musica = await Musica.findOrFail(params.id);
    // return musica;
    const musica = await Musica.query().where("banda_id", params.id).fetch();
    return musica;
  }

  /**
   * Update musica details.
   * PUT or PATCH musicas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const musica = await Musica.findOrFail(params.id);
      const { musica_nome, banda_id, genero, album } = request.only([
        "musica_nome",
        "banda_id",
        "genero",
        "album",
      ]);
      musica.musica_nome = musica_nome;
      musica.banda_id = banda_id;
      musica.genero = genero;
      musica.album = album;
      await musica.save();
      return musica;
    } catch (error) {
      response.status(500).send("Erro ao atualizar a música!");
    }
  }

  /**
   * Delete a musica with id.
   * DELETE musicas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const musica = await Musica.findOrFail(params.id);
      await musica.delete();
      return musica;
    } catch (error) {
      response.status(500).send("Erro ao apagar a música!");
    }
  }
}

module.exports = MusicaController;
