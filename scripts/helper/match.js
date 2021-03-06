(function(){
  "use strict";

  function Match(config) {

    function _isTie(choices) {
      if (!choices.length) { return; }
      return choices.reduce((previous, current) => current === previous);
    }

    return {

      judge(...choices) {

        const isTie = _isTie(choices);

        if (!isTie) {
          const
            [choice_1, choice_2] = choices,
            a = choice_1 === 'Scissors' && choice_2 === 'Paper',
            b = choice_1 === 'Rock' && choice_2 === 'Scissors',
            c = choice_1 === 'Paper' && choice_2 === 'Rock';

          if (a || b || c ) { return 1;}
          return 2;
        }
        return 0;
      },
    };
  }


  define('match', ['config'], function(config) {
    return Match(config);
  });

})();