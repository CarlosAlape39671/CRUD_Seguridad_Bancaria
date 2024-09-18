import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Vigilante from './Vigilante'
import Atracante from './Atracante'
import Juez from './Juez'

export default class Persona extends BaseModel {
  @column({ isPrimary: true })
  public id_persona: number

  @column()
  public codigoPersona: string

  @column()
  public edad: number

  @column()
  public nombreCompleto: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Vigilante, { foreignKey: 'codigoPersona' })
  public subscriptions: HasMany<typeof Vigilante>;

  @hasMany(() => Atracante, { foreignKey: 'codigoPersona' })
  public owners: HasMany<typeof Atracante>;

  @hasMany(() => Juez, { foreignKey: 'codigoPersona' })
  public beneficiaries: HasMany<typeof Juez>;
}
