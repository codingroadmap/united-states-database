exports.up = function (knex, Promise) {
  return knex.schema.createTable('united_states', united_states => {
    united_states.increments('id');
    united_states.string('slug');
    united_states.string('name');
    united_states.string('abbr');
    united_states.string('flag', [500]);
    united_states.string('capital');
    united_states.integer('population');
    united_states.integer('avg_income');
    united_states.integer('gdp');
    united_states.float('cost_of_living', [1], [1]);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('united_states');
};