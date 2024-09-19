import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Vigilante from './Vigilante'
import Sucursal from './Sucursal'

export default class Contratacion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public conArma: boolean
  
  @column()
  public id_vigilante: number

  @column()
  public codigoSucursal: number

  @column({ isPrimary: true })
  public fechaContratacion: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Vigilante, {
    foreignKey: 'id_vigilante'
  })
  public vigilante: BelongsTo<typeof Vigilante>

  @belongsTo(() => Sucursal, {
    foreignKey: 'codigoSucursal'
  })
  public sucursal: BelongsTo<typeof Sucursal>
}
