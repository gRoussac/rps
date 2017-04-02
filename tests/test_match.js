const
  {assert, expect, should} = require('chai'),
  requirejs = require('requirejs');

requirejs.config({
    baseUrl: 'scripts/helper/',
    //nodeRequire: require
});

should(); //[chai]http://chaijs.com/guide/styles/#should

Match = requirejs('match');

describe('Match', function() {
  describe('CHOICES', function() {
    it('should be an object', function() {
        console.log(Match);
        Match.should.be.an('object');
    });
  });
});