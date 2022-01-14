import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from 'App/Models/Course'
import CreateCourseService from 'App/Services/Course/CreateCourseService'

export default class CourseController {
  public async index() {
    const courses = await Course.all()

    return courses.map((course) => course.serialize({ fields: ['id', 'title'] }))
  }

  public async create({ request, response }: HttpContextContract) {
    const courseService = new CreateCourseService()
    const course = await courseService.create(request)

    return response.created(course)
  }
}
