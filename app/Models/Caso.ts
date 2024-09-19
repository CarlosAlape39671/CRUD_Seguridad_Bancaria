import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Atraco from './Atraco'
import Juez from './Juez'

export default class Caso extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public condenado: boolean

  @column()
  public tiempoCarcel: number

  @column()
  public juez_id: number

  @column()
  public atraco_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Juez, {
    foreignKey: 'juez_id'
  })
  public juez: BelongsTo<typeof Juez>

  @belongsTo(() => Atraco, {
    foreignKey: 'atraco_id'
  })
  public atraco: BelongsTo<typeof Atraco>
  
}
