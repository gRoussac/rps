(function(){
  "use strict";

  function Game(config, Player, Match) {

    const game = {

      _default_rounds: config.DEFAULT_ROUNDS,
      _rounds: config.DEFAULT_ROUNDS,
      _results: new Map(),

      setRounds(config = {'rounds': 0}) {
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
        const result = Match.judge(
          Player.play(),
          Player.play('Paper')
        );
        game._setResults(result);
        return this;
      },

      _setResults(result) {
        if (!result) {
          game._increment('ties');
        } else {
          const player = `player_${+result}`;
          game._increment(player);
        }
        game._increment('rounds');
        return this;
      },

      _increment(key) {
        game._results.set(key, game._getResultOf(key) + 1);
      },

      _getResultOf(key) {
        return game._results.get(key) || 0;
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
    {setRounds, start, stats} = game;

    return {setRounds, start, stats};
  }

  define('game', [
    'config',
    'player',
    'match'
    ],
    function(config, Player, Match) {
      return new Game(config, Player, Match);
  });

})();