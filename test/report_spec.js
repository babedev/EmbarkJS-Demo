var assert = require('assert');
var Embark = require('embark');
var EmbarkSpec = Embark.initTests();
var web3 = EmbarkSpec.web3;

describe("Report", function() {
  before(function(done) {
    var contractsConfig = {
      "Report": {
      }
    };
    EmbarkSpec.deployAll(contractsConfig, done);
  });

  it("write report", function(done) {
    Report.write(1, "New report", function() {
      Report.getReport(1, function(err, result) {    
        assert.equal(result, "New report");
        done();
      });
    });
  });
});