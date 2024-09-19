import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Persona from './Persona'
import Contratacion from './Contratacion'

export default class Vigilante extends BaseModel {
  @column({ isPrimary: true })
  public id_vigilante: number

  @column()
  public anosExperiencia: number
  
  @column()
  public codigoPersona: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Persona, {
    foreignKey: 'codigoPersona'
  })
  public persona: BelongsTo<typeof Persona>

  @hasMany(() => Contratacion, {
    foreignKey: 'id_vigilante'
  })
  public contrataciones: HasMany<typeof Contratacion>
}
