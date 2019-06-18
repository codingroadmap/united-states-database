exports.seed = function (knex, Promise) {
  return knex('states').del()
    .then(function () {
      return knex('states').insert([
        {
          id: 1,
          slug: `alabama`,
          name: `Alabama`,
          abbr: `AL`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/2560px-Flag_of_Alabama.svg.png`,
          capital: `Montgomery`,
          population: 4887871,
          avg_income: 48123,
          gdp: 45219,
          cost_of_living: 90.6
        },
        {
          id: 2,
          slug: `alaska`,
          name: `Alaska`,
          abbr: `AK`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2560px-Flag_of_Alaska.svg.png`,
          capital: `Juneau`,
          population: 737438,
          avg_income: 73181,
          gdp: 73205,
          cost_of_living: 131.5
        },
        {
          id: 3,
          slug: `arizona`,
          name: `Arizona`,
          abbr: `AZ`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/2560px-Flag_of_Arizona.svg.png`,
          capital: `Phoenix`,
          population: 7171646,
          avg_income: 56581,
          gdp: 48055,
          cost_of_living: 96.6
        },
        {
          id: 4,
          slug: `arkansas`,
          name: `Arkansas`,
          abbr: `AR`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/2560px-Flag_of_Arkansas.svg.png`,
          capital: `Little Rock`,
          population: 3013825,
          avg_income: 45869,
          gdp: 42454,
          cost_of_living: 87.9
        },
        {
          id: 5,
          slug: `california`,
          name: `California`,
          abbr: `CA`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/1599px-Flag_of_California.svg.png`,
          capital: `Sacramento`,
          population: 39557045,
          avg_income: 71805,
          gdp: 74205,
          cost_of_living: 136.3
        },
        {
          id: 6,
          slug: `colorado`,
          name: `Colorado`,
          abbr: `CO`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg/2560px-Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg.png`,
          capital: `Denver`,
          population: 5695564,
          avg_income: 69117,
          gdp: 63882,
          cost_of_living: 101.6
        },
        {
          id: 7,
          slug: `connecticut`,
          name: `Connecticut`,
          abbr: `CT`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/2560px-Flag_of_Connecticut.svg.png`,
          capital: `Hartford`,
          population: 3572665,
          avg_income: 74168,
          gdp: 76342,
          cost_of_living: 129.1
        }
      ]);
    })
    .then(() => knex.raw(`ALTER SEQUENCE states_id_seq RESTART WITH 2;`));
};