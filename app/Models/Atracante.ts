import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Persona from './Persona'
import Atraco from './Atraco'
import Banda from './Banda'

export default class Atracante extends BaseModel {
  @column({ isPrimary: true })
  public id_atracante: number

  @column()
  public antecedente: string
  
  @column()
  public codigo_persona: string

  @belongsTo(() => Persona, {
    foreignKey: 'codigo_persona'
  })
  public persona: BelongsTo<typeof Persona>

  @belongsTo(() => Atraco, {
    foreignKey: 'atraco_id'
  })
  public atraco: BelongsTo<typeof Atraco>

  @belongsTo(() => Banda, {
    foreignKey: 'banda_id'
  })
  public banda: BelongsTo<typeof Banda>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
