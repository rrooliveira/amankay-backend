import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sponsor from 'App/Models/Sponsor'

export default class SponsorController {
  public async index() {
    const sponsors = await Sponsor.all()

    return sponsors.map((sponsor) => sponsor.serialize({ fields: ['id', 'name'] }))
  }
}
