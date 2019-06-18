module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/united_states',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/united_states',
  },
};