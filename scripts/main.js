(function(){
  "use strict";

  const requirejs = require('requirejs');
  requirejs.config({
      baseUrl: 'scripts/helper/',
      nodeRequire: require
  });

  requirejs([
    'game',
    'config'
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
      .setRounds({rounds})
      .start()
      .stats();
  });

})();