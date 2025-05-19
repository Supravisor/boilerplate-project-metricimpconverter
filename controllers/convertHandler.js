function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = Number(input);
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result = input;
    
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
      case "L":
        result = 1 / galToL;
        break;
      case "lbs":
        result = lbsToKg;
        break;
      case "Kg":
        result = 1 / lbsToKg;
        break;
      case "mi":
        result = miToKm;
        break;
      case "Km":
        result = 1 / miToKm;
        break;
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    let result = "";
    switch (unit) {
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "lbs":
        result = "Kg";
        break;
      case "Kg":
        result = "lbs";
        break;
      case "mi":
        result = "Km";
        break;
      case "Km":
        result = "mi";
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