import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Caso from './Caso'
import Atracante from './Atracante'
import Sucursal from './Sucursal'

export default class Atraco extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fecha_atraco: string

  @column()
  public sucursal_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Sucursal, {
    foreignKey: 'sucursal_id'
  })
  public sucursal: BelongsTo<typeof Sucursal>
  
  @hasMany(() => Caso, {
    foreignKey: 'atraco_id'
  })
  public casos: HasMany<typeof Caso>

  @hasMany(() => Atracante, {
    foreignKey: 'atraco_id'
  })
  public atracantes: HasMany<typeof Atracante>
}
