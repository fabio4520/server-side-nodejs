const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    next();// este next lo que indica es que después de haberse ejecutado lo de arriba, va a ejecutar inmediatamente después lo de abajo (el get).
  })
  .get((req, res, next) => {
    res.end('Will send all the info to you.');
  })
  .post((req, res, next) => {
    res.end(`Will send the dish: ${req.body.name} with details: ${req.body.description}`);
  })
  .put((req, res, next) => {
    res.statusCode = 404;
    res.end('PUT method not supported on dishes.');
  })
  .delete((req, res, next) => {
    res.end('Deleting all dishes!.');
  });


dishRouter.route('/:dishId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    next();// este next lo que indica es que después de haberse ejecutado lo de arriba, va a ejecutar inmediatamente después lo de abajo (el get).
  })
  .get((req, res, next) => {
    res.end('Will send the info of dish ' + req.params.dishId + ' to you.');
  })
  .post((req, res, next) => {
    res.statusCode = 404;
    res.end('POST method not supported on dishes/:dishId.');
  })
  .put((req, res, next) => {
    res.write('Updating dish: ' + req.params.dishId + '\n')
    res.end(`Will send the dish: ${req.body.name} with details: ${req.body.description}`);
  })
  .delete((req, res, next) => {
    res.end('Deleting dish with id: ' + req.params.dishId + '.');
  });

module.exports = dishRouter;