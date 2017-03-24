window.requestAnimationFrame = window.requestAnimationFrame||
                               window.webkitRequestAnimationFrame ||
                               window.webkitRequestAnimationFrame ||
                               window.mozRequestAnimationFrame ||
                               window.oRequestAnimationFrame ||
                               window.msRequestAnimationFrame

var Game = function(canvasId) {
  var me = this;

  var canvas = document.getElementById(canvasId);

  // to draw to context we need getContext
  var ctx = canvas.getContext('2d');

  me.background = 'black';

  me.running = false;
  me.isDebug = true;

  me.actors = [];

  me.clear = function() {
    ctx.fillStyle = me.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  me.update = function(delta) {
    me.actors.forEach(function(a) {
      a.update(me, delta);
    })
  }

  me.draw = function(delta) {
    me.actors.forEach(function(a) {
      a.draw(ctx, delta);
    });
  }

  me.drawFps = function(delta) {
    var seconds = delta/1000;
    var fps = 1/seconds;

    ctx.fillStyle = 'lime';
    ctx.font = '20pt Consolas'
    ctx.fillText(fps.toFixed(1), 20, 20); // ?

  }

  me.start = function() {
    me.running = true;

    var lastTime = Date.now();
    // quick way of ending the loop.
    (function mainLoop() {
      if(!me.running) return;



      // schedules this fn to be called on the next desync
        // better than setInterval (as you don't know when it's called)
      window.requestAnimationFrame(mainLoop);

      // current time in milliseconds
      var current = Date.now();
      // time elapsed in milliseconds since the last frame
      var elapsed = current - lastTime;
      // update/draw
      me.clear();
      me.update(elapsed);
      me.draw(elapsed);

      if(me.isDebug) {
        me.drawFps(elapsed);
      }

      lastTime = current;
    })();

  }

  return me;
}

var game = new Game('game');

var grid = new Grid(50, 50, 10, 10, 20, 20);

grid.cells[6].isAlive = true;
game.actors.push(grid);

game.start();