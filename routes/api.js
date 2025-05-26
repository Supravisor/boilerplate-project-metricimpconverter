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
      
    
    }
    
    let number;

    if (split === 0) {
      number = 1;
    } else {
       if (Number(measurement.slice(0, split)) ===  0) {
         number = 1
       } else if (divider > 1) {
        number = "invalid number";
      } else {
           number = (measurement.slice(0, split));
       }
    }

    let units = measurement.slice(split).toLowerCase();

    let convertHandler = new ConvertHandler();

  if (convertHandler.getNum(number) === "invalid number" && convertHandler.getUnit(units) === "invalid unit") {
      return res.json("invalid number and unit");
  } else if (convertHandler.getNum(number) === "invalid number") {
      return res.json('invalid number');
  } else if (convertHandler.getUnit(units) === "invalid unit") {
      return res.json('invalid unit');
  } else {
      return res.json({
        initNum: convertHandler.getNum(number),
        initUnit: convertHandler.getUnit(units),
        returnNum: convertHandler.convert(convertHandler.getNum(number), units),
        returnUnit: convertHandler.getReturnUnit(units),
        string: convertHandler.getString(convertHandler.getNum(number), convertHandler.spellOutUnit(convertHandler.getUnit(units)), convertHandler.convert(convertHandler.getNum(number), units), convertHandler.spellOutUnit(convertHandler.getReturnUnit(units)))
    });
  }

  });



};
