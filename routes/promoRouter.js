const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
  .all((req, res, next) => { 
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    next();
  })
  .get((req, res, next) => { 
    res.end('Will send all the info of promotions to you.');
  })
  .post((req, res, next) => { 
    res.end(`Will send the promotion: ${req.body.name} with details: ${req.body.description}`);
  })
  .put((req, res, next) => {
    res.statusCode = 404;
    res.end('PUT method not supported on promotions.');
   })
  .delete((req, res, next) => {
    res.end('Deleting all promotions!.');
  });
   
promoRouter.route('/:promoId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    next();
   })
  .get((req, res, next) => {
    res.end(`Will send the promotion: ${req.params.promoId} to you.`);
   })
  .post((req, res, next) => { 
    res.statusCode = 404;
    res.end(`POST method not supported on /promotions/${req.params.promoId}`);
  })
  .put((req, res, next) => {
    res.write(`Updating the promotion: ${req.params.promoId} \n`);
    res.end(`Will update the promotion: ${req.body.name} with details: ${req.body.description}`);
   })
  .delete((req, res, next) => {  
    res.end(`Deleting promotion: ${req.params.promoId}`);
  });

module.exports = promoRouter;