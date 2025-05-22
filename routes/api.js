'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  app.get("/api/convert", function(req, res) {
    let measurement = req.query.input;
    let split = 0;
    let divider = 0;

    for (let i = 0; i < measurement.length; i++) {

      if (Number(measurement[i]) >= 0 || measurement[i] === ".") {
        split++;
      }

      if (measurement[i] === "/") {
        divider++;
        split++;
      }
  
      if (divider > 1) {
        number = "invalid number";
      }

    }

let number = 0;
if (split === 0) {
  number = "invalid number";
} else {
  number = (measurement.slice(0, split));
}

let units = measurement.slice(split).toLowerCase();

let convertHandler = new ConvertHandler();

    res.json({
      initNum: convertHandler.getNum(number),
      initUnit: convertHandler.getUnit(units),
      returnNum: convertHandler.convert(number, units),
      returnUnit: convertHandler.getReturnUnit(units),
      string: convertHandler.getString(convertHandler.getNum(number), convertHandler.spellOutUnit(convertHandler.getUnit(units)), convertHandler.convert(number, units), convertHandler.spellOutUnit(convertHandler.getReturnUnit(units)))
    });


//    res.json({ name: `${input}` });

//    res.send(convertHandler(2));
//res.json({test: convertHandler.getNum()});
  });



};
