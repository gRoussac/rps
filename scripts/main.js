(function(){
  "use strict";

  const requirejs = require('requirejs');
  requirejs([
    'helper/game',
    'helper/config'
  ],

  function(game, config) {

    let total_rounds = config.DEFAULT_NB_ROUNDS;

    process.argv.reduce((previous, current) => {
      if (['-r', '--rounds'].find((arg) => previous === arg)) {
        total_rounds = current;
      }
      return current;
    });

    total_rounds = +Math.round(total_rounds);

    if (isNaN(total_rounds) || !total_rounds) {
      return console.warn('How many rounds ?');
    }

    game
      .config({total_rounds})
      .start()
      .stats();
  });

})();