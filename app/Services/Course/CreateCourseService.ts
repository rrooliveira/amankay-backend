import { RequestContract } from '@ioc:Adonis/Core/Request'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Course from 'App/Models/Course'

export default class CreateCourseService {
  public async create(request: RequestContract) {
    const courseValidate = schema.create({
      title: schema.string({}, [rules.required()]),
      id_sponsor: schema.number([rules.required()]),
      about: schema.string({}, [rules.required()]),
      time: schema.string({}, [rules.required()]),
      idiom: schema.string({}, [rules.required()]),
      certificate: schema.boolean([rules.required()]),
      local: schema.string({}, [rules.required()]),
      id_instructor: schema.number([rules.required()]),
      content: schema.string({}, [rules.required()]),
    })

    const courseData = await request.validate({
      schema: courseValidate,
    })

    const course = await Course.create(courseData)

    return course
  }
}
