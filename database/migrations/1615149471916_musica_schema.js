'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MusicaSchema extends Schema {
  up () {
    this.create('musicas', (table) => {
      table.increments()
      table.string("nome").notNullable()
      table.string("genero").nullable()
      table.string("album").nullable()
      table.integer("banda_id").unsigned().references("id").inTable("bandas").onUpdate("cascade").onDelete("cascade").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('musicas')
  }
}

module.exports = MusicaSchema
