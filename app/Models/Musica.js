'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Musica extends Model {
    banda() {
        return this.belongsTo("App/Models/Banda");
    }
}

module.exports = Musica
