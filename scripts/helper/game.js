(function(){
  "use strict";

  function Game(Config, Player, Match) {

    const game = {

      _default_rounds: Config.DEFAULT_ROUNDS,
      _rounds: Config.DEFAULT_ROUNDS,
      _results: new Map(),

      config(config = {'rounds': 0}) {
        game._rounds = config.rounds || game._default_rounds;
        return this;
      },

      start() {

        game._rounds = +Math.round(game._rounds);

        Array(game._rounds)
          .fill()
          .map((_) =>
            game._fight()
          );
        return this;
      },

      _fight() {
          const result = this._judge(
            Player.play(),
            Player.play('paper')
          );
          this._setResults(result);
      },

      _judge(...choices) {
        if (Match.isTie(choices)) { return; }
        return Match.judge(choices);
      },

      _setResults(result) {
        if (!result) {
          this._setResultOf('ties');
        } else {
          const player = `player_${+result}`;
          this._setResultOf(player);
        }
        this._setResultOf('rounds');
      },

      _setResultOf(key) {
        this._results.set(key, this._getResultOf(key) + 1);
      },

      _getResultOf(key) {
        return this._results.get(key) || 0;
      },

      stats() {
        //console.log(game);
        const
          rounds = game._getResultOf('rounds'),
          ties =  game._getResultOf('ties'),
          player_1 = game._getResultOf('player_1'),
          player_2 = game._getResultOf('player_2'),
          template = [];
          template.push(`"Player A wins ${player_1} of ${rounds} games"`);
          template.push(`"Player B wins ${player_2} of ${rounds} games"`);
          template.push(`"Tie: ${ties} of ${rounds} games"`);
        console.info(template.join('\n'));
        return this;
      }

    },
    {config, start, stats} = game;

    return {config, start, stats};
  }

  define(function() {
    const
      Config = require('helper/config'),
      Player = require('helper/player'),
      Match = require('helper/match');
    return new Game(Config, Player, Match);
  });

})();