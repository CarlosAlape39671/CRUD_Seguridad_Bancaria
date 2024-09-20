import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'entidad_bancarias'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('codigo_entidad')
      table.string('domicilio')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
