(function(){
  "use strict";

  const requirejs = require('requirejs');
  requirejs([
    'helper/game',
    'helper/config'
  ],

  function(game, config) {

    let rounds = config.DEFAULT_ROUNDS;

    process.argv.reduce((previous, current) => {
      if (['-r', '--rounds'].find((arg) => previous === arg)) {
        rounds = current;
      }
      return current;
    });

    rounds = +Math.round(rounds);

    if (isNaN(rounds) || !rounds) {
      return console.warn('How many rounds ?');
    }

    game
      .config({rounds})
      .start()
      .stats();
  });

})();