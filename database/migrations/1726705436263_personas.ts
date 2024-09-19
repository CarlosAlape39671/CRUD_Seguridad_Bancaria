import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'personas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_persona')
      table.string('codigo_persona').notNullable().unique()
      table.integer('edad').notNullable()
      table.string('nombre_completo', 255).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
