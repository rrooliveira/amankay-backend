import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Todo from 'App/Models/Todo'

export default class TodoController {
  public async index() {
    const todos = await Todo.all()

    return todos.map((todo) => todo.serialize({ fields: ['id', 'title'] }))
  }

  public async store({ request, response }: HttpContextContract) {
    Todo.create({ title: request.input('title'), is_completed: false })

    return response.created({ created: true })
  }

  public async update({ request, response, params }: HttpContextContract) {
    const todo = await Todo.findOrFail(params.id)

    todo.is_completed = request.input('is_completed')
    todo.title = request.input('title')
    todo.save()

    return response.status(202).send(todo)
  }
}
