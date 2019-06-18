const database = require('../database-connection');

module.exports = {
  list() {
    return database('us_states').select();
  },
  read(id) {
    return database('us_states').select().where('id', id).first();
  },
  create(id) {
    return database('us_states')
      .insert()
      .where('id', id)
      .returning('*')
      .then(state => state[0]);
  },
  update(id) {
    return database('us_states')
      .update()
      .where('id', id)
      .returning('*')
      .then(state => state[0]);
  },
  delete(id) {
    return database('us_states').delete().where('id', id);
  }
};