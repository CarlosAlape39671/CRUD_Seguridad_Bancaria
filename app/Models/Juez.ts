import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Persona from './Persona'

export default class Juez extends BaseModel {
  @column({ isPrimary: true })
  public id_juez: number

  @column()
  public clave_interna_juzgado: string

  @column()
  public anos_servicio: number

  @column()
  public codigo_persona: string

  @belongsTo(() => Persona, {
    foreignKey: 'codigo_persona'
  })
  public persona: BelongsTo<typeof Persona>
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
