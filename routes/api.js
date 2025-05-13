'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  
  let convertHandler = new ConvertHandler();
  app.get("/api/convert", function(req, res) {
    res.send(convertHandler(req.input));
  });


};
