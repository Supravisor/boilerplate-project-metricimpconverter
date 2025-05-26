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

      test("valid decimal input", () => {
        assert.strictEqual(
          convertHandler.getNum("1.5"),
          1.5,
          "read valid decimal input"
        );
      });

      test("valid fractional input", () => {
        assert.strictEqual(
          convertHandler.getNum("1/2"),
          0.5,
          "read valid fractional input"
        );
      });

      test("valid fractional input with decimal", () => {
        assert.strictEqual(
          convertHandler.getNum("0.4/0.8"),
          0.5,
          "read valid fractional input with decimal"
        );
      });

      test("invalid double fraction input", () => {
        assert.strictEqual(
          convertHandler.getNum("invalid number"),
          "invalid number",
          "error message for invalid double fraction input"
        );
      });

      test("no numeric input", () => {
        assert.strictEqual(
          convertHandler.getNum("1"),
          1,
          "1 unit for no numeric input"
        );
      });

      test("valid input units", () => {
        assert.equal(
          convertHandler.getUnit("gal"),
          "gal",
          "read gal"
        );
        assert.strictEqual(
          convertHandler.getUnit("L"),
           "L",
           "read L"
        );
        assert.strictEqual(
          convertHandler.getUnit("lbs"),
          "lbs",
          "read lbs"
        );
        assert.strictEqual(
          convertHandler.getUnit("kg"),
          "kg",
          "read kg"
        );
        assert.strictEqual(
          convertHandler.getUnit("mi"),
          "mi",
          "read mi"
        );
        assert.strictEqual(
          convertHandler.getUnit("km"),
          "km",
          "read km"
        );
      });

      test("invalid input unit", () => {
        assert.strictEqual(
          convertHandler.getUnit("2gak"),
          "invalid unit",
          "error message for invalid input unit"
        );
      });

      test("return unit for valid input unit", () => {
        assert.strictEqual(
          convertHandler.getReturnUnit("L"),
          "gal",
          "return gal for L"
        );
        assert.strictEqual(
          convertHandler.getReturnUnit("gal"),
          "L",
          "return L for gal"
        );
        assert.strictEqual(
          convertHandler.getReturnUnit("kg"),
          "lbs",
          "return lbs for kg"
        );
        assert.strictEqual(
          convertHandler.getReturnUnit("lbs"),
          "kg",
          "return kg for lbs"
        );
        assert.strictEqual(
          convertHandler.getReturnUnit("km"),
          "mi",
          "return mi for km"
        );
        assert.strictEqual(
          convertHandler.getReturnUnit("mi"),
          "km",
          "return km for mi"
        );
      });

      test("full unit name", () => {
        assert.strictEqual(
          convertHandler.spellOutUnit("gal"),
          "gallons",
          "return gallons for gal"
        );
        assert.strictEqual(
          convertHandler.spellOutUnit("L"),
          "liters",
          "return liters for L"
        );
        assert.strictEqual(
          convertHandler.spellOutUnit("mi"),
          "miles",
          "return miles for mi"
        );
        assert.strictEqual(
          convertHandler.spellOutUnit("km"),
          "kilometers",
          "return kilometers for km"
        );
        assert.strictEqual(
          convertHandler.spellOutUnit("lbs"),
          "pounds",
          "return pounds for lbs"
        );
        assert.strictEqual(
          convertHandler.spellOutUnit("kg"),
          "kilograms",
          "return kilograms for kg"
        );
      });
  
});