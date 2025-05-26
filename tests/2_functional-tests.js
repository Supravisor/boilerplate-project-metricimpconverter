const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

    test("GET /api/convert?input=10L", (done) => {
        chai
          .request(server)
          .get("/api/convert?input=10L")
          .end((req, res) => {
            assert.equal(res.status, 200);
            assert.deepEqual(res.body, {
              initNum: 10,
              initUnit: "L",
              returnNum: 2.64172,
              returnUnit: "gal",
              string: "10 liters converts to 2.64172 gallons",
            });
            done();
          });
      });
    
});