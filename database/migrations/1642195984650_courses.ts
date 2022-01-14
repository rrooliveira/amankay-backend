import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Courses extends BaseSchema {
  protected tableName = 'courses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title').notNullable()
      table
        .integer('id_sponsor')
        .unsigned()
        .references('id')
        .inTable('sponsors')
        .onDelete('CASCADE')
      table.text('about').notNullable()
      table.string('time').notNullable()
      table.string('idiom').notNullable()
      table.boolean('certificate').notNullable()
      table.string('local').notNullable()
      table
        .integer('id_instructor')
        .unsigned()
        .references('id')
        .inTable('instructors')
        .onDelete('CASCADE')
      table.text('content').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
