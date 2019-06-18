const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = parseInt(process.env.PORT || 3000);

const states = require('./routes/states');
// const usStates = require('./routes/usStates');

app.use(bodyParser.json());
app.use(cors());

app.use('/states', states);
// app.use('/us_states', usStates);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err.stack : {}
  });
});

module.exports = app;

app.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, `Listening on http://localhost:${port}/`));