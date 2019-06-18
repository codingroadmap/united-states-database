exports.up = function (knex, Promise) {
  return knex.schema.createTable('us_states', us_states => {
    us_states.increments('id');
    us_states.string('slug');
    us_states.string('name');
    us_states.string('abbr');
    us_states.string('flag', [500]);
    us_states.string('capital');
    us_states.integer('population');
    us_states.integer('avg_income');
    us_states.integer('gdp');
    us_states.float('cost_of_living', [1], [1]);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('us_states');
};