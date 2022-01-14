import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Instructor from 'App/Models/Instructor'

export default class InstructorController {
  public async index() {
    const instructors = await Instructor.all()

    return instructors.map((instructor) => instructor.serialize({ fields: ['id', 'name'] }))
  }
}
