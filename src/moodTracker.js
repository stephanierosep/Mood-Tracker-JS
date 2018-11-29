'use strict';

  function Mood() {
    this.DEFAULT_MOOD = 5;
    this.mood = this.DEFAULT_MOOD;
  }

  Mood.prototype.getCurrentMood = function () {
    return this.mood;
  };
