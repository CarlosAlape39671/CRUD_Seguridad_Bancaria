import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Vigilante from './Vigilante'
import Sucursal from './Sucursal'

export default class Contratacion extends BaseModel {
  public static table = 'contrataciones'

  @column({ isPrimary: true })
  public id: number

  @column()
  public con_arma: boolean
  
  @column()
  public id_vigilante: number

  @column()
  public codigo_sucursal: number

  @column()
  public fecha_contratacion: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Vigilante, {
    foreignKey: 'id_vigilante'
  })
  public vigilante: BelongsTo<typeof Vigilante>

  @belongsTo(() => Sucursal, {
    foreignKey: 'codigo_sucursal'
  })
  public sucursal: BelongsTo<typeof Sucursal>
}
