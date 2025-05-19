'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  app.get("/api/convert", function(req, res) {
    let measurement = req.query.input;
    let split = 0;
    let divider = 0;
    
    for (let i = 0; i < measurement.length; i++) {
    
      if (Number(measurement[i]) >= 0) {
        split++;
      }
    
      if (measurement[i] === "/") {
        divider++;
        split++;
      }
    
    }
    
    let number = (measurement.slice(0, split));
    let units = measurement.slice(split);

    let convertHandler = new ConvertHandler();

    res.json({
      initNum: convertHandler.getNum(number),
      initUnit: convertHandler.getUnit(units),
      returnNum: convertHandler.getReturnUnit(units) * number,
      returnUnit: convertHandler.spellOutUnit(units),
      string: convertHandler.getString(number, units, convertHandler.getReturnUnit(units) * number, convertHandler.spellOutUnit(units))
    });


//    res.json({ name: `${input}` });

//    res.send(convertHandler(2));
//res.json({test: convertHandler.getNum()});
  });



};
