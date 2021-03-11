'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Banda extends Model {
    musicas(){
        return this.hasMany("app/Models/Musica")
    }
}

module.exports = Banda
