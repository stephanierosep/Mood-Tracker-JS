'use strict';

  function Mood() {
    this.mood = "currently";
  }

  Mood.prototype.getCurrentMood = function () {
    return this.mood;
  };
