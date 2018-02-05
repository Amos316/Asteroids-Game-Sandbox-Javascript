var InputHandler = Class.extend({

  init: function (keys) {
    this.keys = {};
    this.down = {};
    this.pressed = {};

    for (key in keys) {
      var code = keys[key];

      this.keys[code] = key;
      this.down[key] = false;
      this.pressed[key] = false;
    }

    var self = this;
    document.addEventListener("keydown", function (e) {
      if (self.keys[e.keyCode]) {
        self.down[self.keys[e.keyCode]] = true;
      }
    });
    document.addEventListener("keyup", function (e) {
      if (self.keys[e.keyCode]) {
        self.down[self.keys[e.keyCode]] = false;
        self.pressed[self.keys[e.keyCode]] = false;
      }
    });
  },
  isDown: function(key) {
    return this.down[key];
  },
  isPressed: function(key) {
    if (this.pressed[key]) {
     return false;
    } else if (this.down[key]) {
      return this.pressed[key] = true;
    }
    return false;
  }
});