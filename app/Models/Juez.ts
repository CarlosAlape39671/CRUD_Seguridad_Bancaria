import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Persona from './Persona'

export default class Juez extends BaseModel {
  @column({ isPrimary: true })
  public id_juez: number

  @column()
  public claveInternaJuzgado: string

  @column()
  public añosServicio: number

  @belongsTo(() => Persona)
  public persona: BelongsTo<typeof Persona>
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
