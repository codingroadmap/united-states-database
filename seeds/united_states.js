exports.seed = function (knex, Promise) {
  return knex('united_states').del()
    .then(function () {
      return knex('united_states').insert([
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
        },
        {
          id: 8,
          slug: `delaware`,
          name: `Delaware`,
          abbr: `DE`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/2560px-Flag_of_Delaware.svg.png`,
          capital: `Dover`,
          population: 967171,
          avg_income: 62852,
          gdp: 77253,
          cost_of_living: 102.5
        },
        {
          id: 9,
          slug: `florida`,
          name: `Florida`,
          abbr: `FL`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/2560px-Flag_of_Florida.svg.png`,
          capital: `Tallahassee`,
          population: 21299325,
          avg_income: 52594,
          gdp: 48318,
          cost_of_living: 100.4
        },
        {
          id: 10,
          slug: `georgia`,
          name: `Georgia`,
          abbr: `GA`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/2880px-Flag_of_Georgia_%28U.S._state%29.svg.png`,
          capital: `Atlanta`,
          population: 10519475,
          avg_income: 56183,
          gdp: 55832,
          cost_of_living: 90.0
        },
        {
          id: 11,
          slug: `hawaii`,
          name: `Hawaii`,
          abbr: `HI`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/2880px-Flag_of_Hawaii.svg.png`,
          capital: `Honolulu`,
          population: 1420491,
          avg_income: 77765,
          gdp: 64096,
          cost_of_living: 187.7
        },
        {
          id: 12,
          slug: `idaho`,
          name: `Idaho`,
          abbr: `ID`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/2560px-Flag_of_Idaho.svg.png`,
          capital: `Boise`,
          population: 1754208,
          avg_income: 52225,
          gdp: 43430,
          cost_of_living: 90.8
        },
        {
          id: 13,
          slug: `illinois`,
          name: `Illinois`,
          abbr: `IL`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/2880px-Flag_of_Illinois.svg.png`,
          capital: `Springfield`,
          population: 12741080,
          avg_income: 62992,
          gdp: 67268,
          cost_of_living: 97.1
        },
        {
          id: 14,
          slug: `indiana`,
          name: `Indiana`,
          abbr: `IN`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/2560px-Flag_of_Indiana.svg.png`,
          capital: `Indianapolis`,
          population: 6691878,
          avg_income: 54181,
          gdp: 55172,
          cost_of_living: 90.6
        },
        {
          id: 15,
          slug: `iowa`,
          name: `Iowa`,
          abbr: `IA`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/2560px-Flag_of_Iowa.svg.png`,
          capital: `Des Moines`,
          population: 3156145,
          avg_income: 58570,
          gdp: 59977,
          cost_of_living: 92.3
        },
        {
          id: 16,
          slug: `kansas`,
          name: `Kansas`,
          abbr: `KS`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/2880px-Flag_of_Kansas.svg.png`,
          capital: `Topeka`,
          population: 2911505,
          avg_income: 56422,
          gdp: 56334,
          cost_of_living: 91.1
        },
        {
          id: 17,
          slug: `kentucky`,
          name: `Kentucky`,
          abbr: `KY`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/2880px-Flag_of_Kentucky.svg.png`,
          capital: `Frankfort`,
          population: 4468402,
          avg_income: 48375,
          gdp: 46898,
          cost_of_living: 94.6
        },
        {
          id: 18,
          slug: `louisiana`,
          name: `Louisiana`,
          abbr: `LA`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/2560px-Flag_of_Louisiana.svg.png`,
          capital: `Baton Rouge`,
          population: 4659978,
          avg_income: 46145,
          gdp: 53589,
          cost_of_living: 93.8
        },
        {
          id: 19,
          slug: `maine`,
          name: `Maine`,
          abbr: `ME`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/2560px-Flag_of_Maine.svg.png`,
          capital: `Augusta`,
          population: 1338404,
          avg_income: 56277,
          gdp: 47969,
          cost_of_living: 115.0
        },
        {
          id: 20,
          slug: `maryland`,
          name: `Maryland`,
          abbr: `MD`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/2560px-Flag_of_Maryland.svg.png`,
          capital: `Annapolis`,
          population: 6042718,
          avg_income: 80776,
          gdp: 68573,
          cost_of_living: 129.1
        },
        {
          id: 21,
          slug: `massachusetts`,
          name: `Massachusetts`,
          abbr: `MA`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/2880px-Flag_of_Massachusetts.svg.png`,
          capital: `Boston`,
          population: 6902149,
          avg_income: 77385,
          gdp: 82480,
          cost_of_living: 129.4
        },
        {
          id: 22,
          slug: `michigan`,
          name: `Michigan`,
          abbr: `MI`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/2560px-Flag_of_Michigan.svg.png`,
          capital: `Lansing`,
          population: 9995915,
          avg_income: 54909,
          gdp: 53209,
          cost_of_living: 89.5
        },
        {
          id: 23,
          slug: `minnesota`,
          name: `Minnesota`,
          abbr: `MN`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/2560px-Flag_of_Minnesota.svg.png`,
          capital: `Saint Paul`,
          population: 5679718,
          avg_income: 68388,
          gdp: 64675,
          cost_of_living: 99.7
        },
        {
          id: 24,
          slug: `mississippi`,
          name: `Mississippi`,
          abbr: `MS`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Mississippi.svg/2560px-Flag_of_Mississippi.svg.png`,
          capital: `Jackson`,
          population: 2986530,
          avg_income: 43529,
          gdp: 37948,
          cost_of_living: 85.0
        },
        {
          id: 25,
          slug: `missouri`,
          name: `Missouri`,
          abbr: `MO`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/2880px-Flag_of_Missouri.svg.png`,
          capital: `Jefferson City`,
          population: 6126452,
          avg_income: 53578,
          gdp: 51699,
          cost_of_living: 90.1
        },
        {
          id: 26,
          slug: `montana`,
          name: `Montana`,
          abbr: `MT`,
          flag: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/2560px-Flag_of_Montana.svg.png`,
          capital: `Helena`,
          population: 1062305,
          avg_income: 53386,
          gdp: 46609,
          cost_of_living: 98.0
        }
      ]);
    })
    .then(() => knex.raw(`ALTER SEQUENCE united_states_id_seq RESTART WITH 2;`));
};