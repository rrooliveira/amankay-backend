import { RequestContract } from '@ioc:Adonis/Core/Request'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import PasswordReset from 'App/Models/PasswordReset'

export default class ResetPasswordUserService {
  public async generateToken(request: RequestContract) {
    const userValidate = schema.create({
      email: schema.string({}, [rules.email(), rules.exists({ table: 'users', column: 'email' })]),
    })

    const userData = await request.validate({
      schema: userValidate,
    })

    if (!userData) {
      console.log('error user')
      throw new Error('User Error')
    }

    await PasswordReset.query().where('email', userData.email).delete()

    const { token } = await PasswordReset.create({
      email: userData.email,
      token: 'new-token-generated',
    })

    return token
  }
}
