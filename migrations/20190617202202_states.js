exports.up = function (knex, Promise) {
  return knex.schema.createTable('states', states => {
    states.increments('id');
    states.string('slug');
    states.string('name');
    states.string('abbr');
    states.string('flag', [500]);
    states.string('capital');
    states.integer('population');
    states.integer('avg_income');
    states.integer('gdp');
    states.float('cost_of_living', [1], [1]);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('states');
};