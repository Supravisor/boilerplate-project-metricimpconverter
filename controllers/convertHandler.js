function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input;
    
    if (input === "invalid number") {
      return input;
    } else {
      return Number(input);
    }
  };
  
  this.getUnit = function(input) {
    input = input.toLowerCase();
    let result = "";
    switch (input) {
      case "gal":
        result = "gal";
        break;
      case "l":
        result = "L";
        break;
      case "lbs":
        result = "lbs";
        break;
      case "kg":
        result = "kg";
        break;
      case "mi":
        result = "mi";
        break;
      case "km":
        result = "km";
        break;
      default:
        result = "invalid unit"
    }

    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    initUnit = initUnit.toLowerCase();
    let result = "";
    switch (initUnit) {
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
      default:
        result = "invalid unit"
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    unit = unit.toLowerCase();
    let result = "";
    switch (unit) {
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
  
  this.convert = function(initNum, initUnit) {
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

    return Number(result * initNum).toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
