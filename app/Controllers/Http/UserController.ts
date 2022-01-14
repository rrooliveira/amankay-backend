import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserService from 'App/Services/User/CreateUserService'
import ResetPasswordUserService from 'App/Services/User/ResetPasswordUserService'
export default class UsersController {
  public async create({ request, response }: HttpContextContract) {
    const userService = new CreateUserService()
    const user = await userService.create(request)

    return response.created(user)
  }

  public async resetPassword({ request, response }) {
    const resetPassword = new ResetPasswordUserService()
    const token = await resetPassword.generateToken(request)
    //TODO
    //SEND MAIL
  }
}
