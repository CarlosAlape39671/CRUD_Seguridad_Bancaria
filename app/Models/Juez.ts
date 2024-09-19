import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Persona from './Persona'
import Caso from './Caso'

export default class Juez extends BaseModel {
  @column({ isPrimary: true })
  public id_juez: number

  @column()
  public claveInternaJuzgado: string

  @column()
  public anosServicio: number

  @column()
  public codigoPersona: string

  @belongsTo(() => Persona, {
    foreignKey: 'codigoPersona'
  })
  public persona: BelongsTo<typeof Persona>

  @hasMany(() => Caso, {
    foreignKey: 'juez_id'
  })
  public casos: HasMany<typeof Caso>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
