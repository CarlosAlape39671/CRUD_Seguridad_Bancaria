import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Contratacion from './Contratacion'
import Entidadbancaria from './Entidadbancaria'
import Atraco from './Atraco'

export default class Sucursal extends BaseModel {
  @column({ isPrimary: true })
  public codigo_sucursal: number

  @column()
  public domicilio: string

  @column()
  public numero_empleados: number

  @column()
  public codigo_entidad: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Contratacion, {
    foreignKey: 'codigo_sucursal'
  })
  public contrataciones: HasMany<typeof Contratacion>

  @belongsTo(() => Entidadbancaria, {
    foreignKey: 'codigo_entidad'
  })
  public sucursal: BelongsTo<typeof Entidadbancaria>

  @hasMany(() => Atraco, {
    foreignKey: 'codigo_sucursal'
  })
  public atracos: HasMany<typeof Atraco>
}
