import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'sucursales'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('codigoSucursal')
      table.string('domicilio')
      table.integer('numeroEmpleados')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
