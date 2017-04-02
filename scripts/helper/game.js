(function(){
  "use strict";

  function Game(Config, Player, Match) {

    const game = {

      _total_rounds: Config.DEFAULT_NB_ROUNDS,
      _results: new Map(),

      config(config = {'total_rounds': 0}) {
        game._total_rounds = config.total_rounds || game._total_rounds;
      },

      start() {

        game.total_rounds = +Math.round(game.total_rounds);

        Array(game._total_rounds)
          .fill()
          .map((_) =>
            game._fight()
          );
      },

      _fight() {
          const result = game._judge(
            Player.play(),
            Player.play('paper')
          );
          game._setResults(result);
      },

      _judge(...choices) {
        if (Match.isTie(choices)) { return; }
        return Match.judge(choices);
      },

      _setResults(result) {
        if (!result) {
          game._setResultOf('ties');
        } else {
          const player = `player_${+result}`;
          game._setResultOf(player);
        }
        game._setResultOf('rounds');
      },

      _setResultOf(key) {
        game._results.set(key, game._getResultOf(key) + 1);
      },

      _getResultOf(key) {
        return game._results.get(key) || 0;
      },

      stats() {
        const
          rounds = game._getResultOf('rounds'),
          ties =  game._getResultOf('ties'),
          player_1 = game._getResultOf('player_1'),
          player_2 = game._getResultOf('player_2'),
          template = [];
          template.push(`"Player A wins ${player_1} of ${rounds} games"`);
          template.push(`"Player B wins ${player_2} of ${rounds} games"`);
          template.push(`"Tie: ${ties} of ${rounds} games"`);
        return template.join('\n');
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
    return Game(Config, Player, Match);
  });

})();