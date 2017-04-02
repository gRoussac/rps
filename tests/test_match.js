require("amd-loader");
const
  {assert, expect, should} = require('chai');

should(); //[chai]http://chaijs.com/guide/styles/#should

Match = require('../scripts/helper/match');

describe('Match', function() {
  describe('CHOICES', function() {
    it('should getChoices', function() {
      console.log('Match  ' + Match);
    });
  });
});