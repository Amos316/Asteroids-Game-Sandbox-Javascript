var States = {
  NO_CHANGE: 0, MENU: 1, GAME: 2, END: 3
}

var Game = Class.extend({
  init: function () {
    this.canvas = new Canvas(640, 480);

    this.input = new InputHandler({
      left: 37, up: 38, right: 39, down: 40, spacebar: 32, enter: 13
    });

    this.canvas.ctx.strokeStyle = "white"

    this.currentState = null;
    this.stateVars = {
      score: 0
    }
    this.nextState = States.MENU;
  },
  run: function () {
    var self = this;
    this.canvas.animate(function () {
      if (self.nextState !== States.NO_CHANGE) {
        switch (self.nextState) {
          case States.MENU:
            self.currentState = new MenuState(self);
            break;
          case States.GAME:
            self.currentState = new GameState(self);
            break;
          case States.END:
            self.currentState = new State(self);
            breaks;
        }
        self.nextState = States.NO_CHANGE;
      }
      self.currentState.handleInputs(self.input);
      self.currentState.update();
      self.currentState.render(self.canvas.ctx);
    });
  }
});