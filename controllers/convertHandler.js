function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = Number(input);
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result = "";
    switch (input) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
    }

    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    

    let result = "";
    switch (initUnit) {
      case "gal":
        result = galToL;
        break;
      case "l":
        result = 1 / galToL;
        break;
      case "lbs":
        result = lbsToKg;
        break;
      case "kg":
        result = 1 / lbsToKg;
        break;
      case "mi":
        result = miToKm;
        break;
      case "km":
        result = 1 / miToKm;
        break;
    }

    return Number(result);
  };

  this.spellOutUnit = function(unit) {
    let result = "";
    switch (unit) {
      case "gal":
        result = "L";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
    }

    return result;
  };

  this.returnUnitString = function(initUnit) {
    let result = "";
    switch (initUnit) {
      case "gal":
        result = "liters";
        break;
      case "l":
        result = "gallons";
        break;
      case "lbs":
        result = "kilograms";
        break;
      case "kg":
        result = "pounds";
        break;
      case "mi":
        result = "kilometers";
        break;
      case "km":
        result = "miles";
        break;
    }
    return result;
  };


  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
