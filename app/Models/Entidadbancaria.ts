import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Sucursal from './Sucursal'

export default class Entidadbancaria extends BaseModel {
  public static table = 'entidad_bancarias'
  
  @column({ isPrimary: true })
  public codigo_entidad: number

  @column()
  public domicilio: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Sucursal, {
    foreignKey: 'codigo_entidad'
  })
  public sucursales: HasMany<typeof Sucursal>
}
