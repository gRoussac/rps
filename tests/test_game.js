const
  {assert, expect, should} = require('chai'),
  requirejs = require('requirejs');

requirejs.config({
    baseUrl: 'scripts/helper/',
    //nodeRequire: require
});

should(); //[chai]http://chaijs.com/guide/styles/#should

Game = requirejs('game');

describe('Game', function() {
	it('Game should be an object', function() {
		Game.should.be.an('object');
	});
});