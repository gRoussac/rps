(function(){
  "use strict";

  const requirejs = require('requirejs');
  requirejs([
    'helper/game',
    'helper/config'
  ],

  function(Game, Config) {

    let total_rounds = Config.DEFAULT_NB_ROUNDS;

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

    Game.config({total_rounds});
    Game.start();
    return console.info(Game.stats());
  });

})();