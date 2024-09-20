import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'sucursales'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('codigo_sucursal')
      table.string('domicilio')
      table.integer('numero_empleados')
      table.integer('codigo_entidad').unsigned()
        .references('codigo_entidad').inTable('entidad_bancarias')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
