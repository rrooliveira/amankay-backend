import { RequestContract } from '@ioc:Adonis/Core/Request'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class CreateUserService {
  public async create(request: RequestContract) {
    const userValidate = schema.create({
      email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
      password: schema.string({}, [rules.confirmed()]),
    })

    const userData = await request.validate({
      schema: userValidate,
    })

    const user = await User.create(userData)

    return user
  }
}
