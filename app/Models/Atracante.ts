import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Persona from './Persona'

export default class Atracante extends BaseModel {
  @column({ isPrimary: true })
  public id_atracante: number

  @column()
  public antecedente: string

  @belongsTo(() => Persona)
  public persona: BelongsTo<typeof Persona>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
