import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'contrataciones'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('con_arma')
      table.date('fecha_contratacion')
      table.integer('codigo_sucursal').unsigned().references('codigo_sucursal').inTable('sucursales')
      table.integer('id_vigilante').unsigned().references('id_vigilante').inTable('vigilantes')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
