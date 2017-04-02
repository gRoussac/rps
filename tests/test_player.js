const
  {assert, expect, should} = require('chai'),
  requirejs = require('requirejs'),
  sinon = require('sinon'),
  random = require('random-js');

requirejs.config({
    baseUrl: 'scripts/helper/',
    //nodeRequire: require
});

should(); //[chai]http://chaijs.com/guide/styles/#should

Player = requirejs('player');
Match = requirejs('match');

describe('Player', function() {
  describe('Play', function() {
    it('Player should be an object', function() {
      Player.should.be.an('object');
    });
    it('Player should have a function play()', function() {
      Player.play.should.be.an('function');
    });
    it('Player can play \'Paper\'', function() {
      expect(Player.play('Paper')).to.equal('Paper');
    });
    it('Player can play \'paPeR\'', function() {
      expect(Player.play('paPeR')).to.equal('Paper');
    });
    it('Player that plays randomly will get a choice', function() {
      const choice = 'Scissors';
      const callback =  sinon.stub(Player, 'play').withArgs().returns(choice);
      expect(Player.play()).to.equal(choice);
      expect(Player.play()).not.to.equal('');
      Player.play.restore();
    });
    it('Player can not play an empty string', function() {
      const choice = 'Scissors';
      const callback =  sinon.stub(Player, 'play').withArgs('').returns(choice);
      expect(Player.play('')).not.to.equal('');
      Player.play.restore();
    });
    it('Player can force \'Paper\'', function() {
      const choice = 'Paper';
      const callback =  sinon.stub(Player, 'play').withArgs(choice).returns(choice);
      expect(Player.play(choice)).to.equal(choice);
      Player.play.restore();
    });
    it("Player that plays randomly will get a valid choice in 'Paper', 'Rocks', 'Scissors'", function() {
      const choice = 'unvalid';
      const callback =  sinon.stub(Player, 'play').withArgs(choice).returns(choice);
      const choosen = Player.play(choice);
      const expected = ['Paper', 'Rocks', 'Scissors'];
      assert.equal(-1, expected.indexOf(choosen));
      Player.play.restore();
    });
  });
  describe('Random', function() {
    it('random.engines is an object', function(){
      assert.typeOf(random.engines, 'object');
    });
    it('random.engines has an nativeMath engine', function(){
      assert.property(random.engines, 'nativeMath');
    });
    it('random.engines nativeMath is a function', function(){
      assert.typeOf(random.engines.nativeMath, 'function');
    });
    it('has an math engine', function(){
      const engine = 'test random engine';
      sinon.stub(random.engines, 'nativeMath').returns(engine);
      expect(random.engines.nativeMath()).to.equal(engine);
      random.engines.nativeMath.restore();
    });

    it('can call the random shuffle function', function() {
      const spy = sinon.spy();
      const proxy = random.shuffle(random.engines.nativeMath, spy);
      proxy();
      assert(spy.called);
    });

    it('can choose a random choice', function() {
      const callback =  sinon.stub(random, 'shuffle').returns(['test', 'test1', 'test2']);
      expect(Player.play()).to.equal('test');
      random.shuffle.restore();
    });
  });
});