const
  {assert, expect, should} = require('chai'),
  requirejs = require('requirejs');

requirejs.config({
    baseUrl: 'scripts/helper/',
    //nodeRequire: require
});

should(); //[chai]http://chaijs.com/guide/styles/#should

Player = requirejs('player');

describe('Player', function() {
  describe('DEFAULT_ROUNDS', function() {
    it('should be an object', function() {
        console.log(Player);
        Player.should.be.an('object');
    });
  });
});