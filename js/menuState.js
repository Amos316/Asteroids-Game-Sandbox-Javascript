var MenuState = State.extend({
  init: function (game) {
    this.game = game;


    var num = Math.random() * 5 + 5;
    this.asteroids = [];
    for (var i = 0; i < num; i++) {
      var n = Math.round(Math.random() * (Points.ASTEROIDS.length - 1));

      var x = Math.random() * this.canvasWidth;
      var y = Math.random() * this.canvasHeight;

      var s = [1, 2, 4][Math.round(Math.random() * 2)]

      var astr = new Asteroid(Points.ASTEROIDS[n], AsteroidSize / s, x, y);
      astr.maxX = this.canvasWidth;
      astr.maxY = this.canvasHeight;

      this.asteroids.push(astr);

    }
  },
  handleInputs: function (input) {
    if (input.isPressed("spacebar")) {
      this.game.nextState = States.GAME;
    }
  },
  update: function () {
    for (var i = 0, len = this.asteroids.length; i < len; i++) {
      this.asteroids[i].update();
    }
  },
  render: function (ctx) {
    ctx.clearAll();

    for (var i = 0, len = this.asteroids.length; i < len; i++) {
      this.asteroids[i].draw(ctx);
    }

    ctx.vectorText("ASTEROIDS", 6, null, 180);
    ctx.vectorText("push space to play", 2, null, 260);
  }
});