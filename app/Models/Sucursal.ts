import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Contratacion from './Contratacion'
import Entidadbancaria from './Entidadbancaria'
import Atraco from './Atraco'

export default class Sucursal extends BaseModel {
  @column({ isPrimary: true })
  public codigoSucursal: number

  @column()
  public domicilio: string

  @column()
  public numeroEmpleados: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Contratacion, {
    foreignKey: 'codigoSucursal'
  })
  public contrataciones: HasMany<typeof Contratacion>

  @belongsTo(() => Entidadbancaria, {
    foreignKey: 'codigoEntidad'
  })
  public sucursal: BelongsTo<typeof Entidadbancaria>

  @hasMany(() => Atraco, {
    foreignKey: 'codigoSucursal'
  })
  public atracos: HasMany<typeof Atraco>
}
