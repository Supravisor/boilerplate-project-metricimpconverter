function ConvertHandler(input) {
  
  this.getNum = function(input) {
    let divider = 0;
    for (let i=0; i<input.length; i++) {
      if (input[i] === "/") {
        divider++;
      }
    }

    if (divider <= 1) {
      let result = Number(input);
      return result;
    }
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
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
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
