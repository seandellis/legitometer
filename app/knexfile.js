// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'legit-o-meterdb',
    },
    debug: true,
  },

  production: {
    client: 'pg',
    // connection: {
    //   database: process.env.DATABASE_URL,
    //   user:     process.env.DB_USER,
    //   password: process.env.DB_PASS
    // },
    connection: process.env.DB_STRING,
    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
