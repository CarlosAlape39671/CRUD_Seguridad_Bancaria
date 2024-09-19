import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Atracante from './Atracante'

export default class Banda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'numeroBanda' })
  public numeroBanda: number

  @column({ columnName: 'numeroMiembros' })
  public numeroMiembros: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Atracante, {
    foreignKey: 'banda_id'
  })
  public atracantes: HasMany<typeof Atracante>
}
