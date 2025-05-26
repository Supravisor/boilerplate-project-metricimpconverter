const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    test("valid whole number input", () => {
        assert.strictEqual(
          convertHandler.getNum("2"),
          2,
          "read valid whole number input"
        );
      });
  
});