import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import Persona from './Persona'

export default class Vigilante extends BaseModel {
  @column({ isPrimary: true })
  public id_vigilante: number

  @column()
  public añosExperiencia: number

  @belongsTo(() => Persona)
  public persona: BelongsTo<typeof Persona>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
