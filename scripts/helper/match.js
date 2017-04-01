(function(){
  "use strict";

  function Rule(Config) {

    const choices = new Set(Config.DEFAULT_CHOICES);

    return {
      getChoices() {
        return choices;
      },
      isTie(choices){
        return choices.reduce((previous, current) => current === previous);
      },
      judge(choices) {
        const
          [choice_1, choice_2] = choices,
          a = choice_1 === 'Scissors' && choice_2 === 'Paper',
          b = choice_1 === 'Rock' && choice_2 === 'Scissors',
          c = choice_1 === 'Paper' && choice_2 === 'Rock';

        if (a || b || c ) { return 1;}
        return 2;
      },
    };
  }

  define(function() {
    const Config = require('helper/config');
    return Rule(Config);
  });

})();