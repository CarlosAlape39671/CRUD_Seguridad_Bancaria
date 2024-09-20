import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'casos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('condenado')
      table.integer('tiempo_carcel')
      table.integer('id_juez')
        .unsigned()
        .references('id_juez').inTable('juezs')
      table.integer('atraco_id')
        .unsigned()
        .references('id').inTable('atracos')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
