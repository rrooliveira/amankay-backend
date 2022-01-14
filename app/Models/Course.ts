import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public sponsor: string

  @column()
  public about: string

  @column()
  public time: string

  @column()
  public idiom: string

  @column()
  public certificate: boolean

  @column()
  public local: string

  @column()
  public instructor: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
