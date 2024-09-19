import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'atracantes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_atracante')
      table.string('codigo_persona').references('personas.codigo_persona').onDelete('CASCADE').onUpdate('CASCADE').unique()
      table.integer('atraco_id')
        .unsigned()
        .references('id').inTable('atracos')
      table.integer('banda_id')
        .unsigned()
        .references('id').inTable('bandas')
      table.string('antecedente').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
