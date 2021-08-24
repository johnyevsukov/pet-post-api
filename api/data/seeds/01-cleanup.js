const { clean } = require('knex-cleaner')

/* 
   wipe previous seeding
   before seeding again
*/

exports.seed = function (knex) {
  return clean(knex, {
    mode: 'truncate',
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
  })
}
