(function(){
  "use strict";

  const requirejs = require('requirejs');
  requirejs([
    'helper/game',
    'helper/config'
  ],

  function(Game, Config) {
    if (typeof process === 'undefined' || !process) {return;}
    const [,,nb_round] = process.argv;

    if (0 === +nb_round) {
      return console.warn('no rounds ?');
    }

    const total_rounds = +nb_round || Config.DEFAULT_NB_ROUNDS;
    Game.config({total_rounds});
    Game.start();
    return console.info(Game.stats());
  });

})();