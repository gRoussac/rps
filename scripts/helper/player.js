(function(){
  "use strict";

  function Player(choices, shuffle) {

    const REGEX_CAPITALIZE = /\b\w/g;

    return {

      play(cheat = '') {

        if (cheat) {
          return cheat.replace(REGEX_CAPITALIZE, letter => letter.toUpperCase());
        }

        const [choice] = shuffle([...choices]);
        return choice;
      }

    };
  }

  define(function() {
    const
      choices = require('helper/match').getChoices(),
      Random = require('random-js'),
      engine = Random.engines.nativeMath,
      shuffle = (array) => Random.shuffle(engine, array);
    return Player(choices, shuffle);
  });

})();