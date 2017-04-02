require("amd-loader");
const
  {assert, expect, should} = require('chai');
should(); //[chai]http://chaijs.com/guide/styles/#should
config = require('../scripts/helper/config');
console.log(config);
match = require('../scripts/helper/match');
console.log(match);
Player = require('../scripts/helper/player');
console.log(Player);
describe('Player', function() {
  describe('DEFAULT_ROUNDS', function() {
    it('should be an instance of Player', function() {
      console.log('YO  ' + Player);
        // Player.should.be.an('object');
    });
  });
});