require("amd-loader");
const
  {assert, expect, should} = require('chai'),
  config = require('../scripts/helper/config');

should(); //[chai]http://chaijs.com/guide/styles/#should

describe('Configuration', function() {
  describe('DEFAULT_ROUNDS', function() {
    it('should be an object', function() {
        config.should.be.an('object');
    });
    it('should have DEFAULT_ROUNDS as key', function() {
        expect(config.DEFAULT_ROUNDS);
    });
    it('should have DEFAULT_ROUNDS as number', function() {
       config.DEFAULT_ROUNDS.should.be.a('number');
    });
    it('should have DEFAULT_ROUNDS as value 1000', function() {
        expect(config.DEFAULT_ROUNDS).to.equal(1000);
    });
  });
  describe('DEFAULT_CHOICES', function() {
    it('should have DEFAULT_CHOICES as key', function() {
        expect(config.DEFAULT_CHOICES);
    });
    it('should have DEFAULT_CHOICES as array', function() {
       config.DEFAULT_CHOICES.should.be.a('array');
    });
    it("should have DEFAULT_CHOICES as value ['Rock', 'Paper', 'Scissors']", function() {
      const [rock, paper, scissors] = config.DEFAULT_CHOICES;
        expect(rock).to.equal('Rock');
        expect(paper).to.equal('Paper');
        expect(scissors).to.equal('Scissors');
    });
  });
});