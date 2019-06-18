const express = require('express');
const router = express.Router();

const queries = require('../queries/usStates');

router.get('/', (request, response, next) => {
  queries.list('us_states').then(us_states => {
    response.json({
      us_states
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(us_state => {
    us_state
      ?
      response.json({
        us_state
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(us_state => {
    response.status(201).json({
      us_state: us_state
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(us_state => {
    response.json({
      us_state: us_state[0]
    });
  }).catch(next);
});

module.exports = router;