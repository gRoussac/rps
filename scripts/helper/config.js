(function(){
  "use strict";

  const
    config = {
      "DEFAULT_ROUNDS": 1000,
      "DEFAULT_CHOICES": ['Rock', 'Paper', 'Scissors']
    };

  define('config', [], function() {
    return config;
  });

})();