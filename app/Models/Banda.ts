import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Atracante from './Atracante'

export default class Banda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'numero_banda' })
  public numero_banda: number

  @column({ columnName: 'numero_miembros' })
  public numero_miembros: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Atracante, {
    foreignKey: 'banda_id'
  })
  public atracantes: HasMany<typeof Atracante>
}
