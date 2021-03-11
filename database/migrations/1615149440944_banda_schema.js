'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BandaSchema extends Schema {
  up () {
    this.create('bandas', (table) => {
      table.increments()
      table.string("nome").unique().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('bandas')
  }
}

module.exports = BandaSchema
