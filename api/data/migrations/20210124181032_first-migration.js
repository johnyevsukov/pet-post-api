exports.up = function(knex) {
  return knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('user_username', 200).notNullable()
      users.string('user_password', 200).notNullable()
      users.string('user_email', 320).notNullable().unique()
      users.string('user_species', 200)
      users.date('user_birthday')
      users.string('user_location', 200)
      users.timestamps(false, true)
    })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
}
