var Grid = function(x, y, rows, cols, width, height) {
  var me = this;

  me.x = x;
  me.y = y;
  me.rows = rows;
  me.cols = cols;
  me.width = width;
  me.height = height;

  me.background = 'white';
  me.forground = 'black';

  me.cellColor = 'green';

  // me.cells = new Array(rows * cols);
  me.cells = Array.apply(null, Array(rows * cols));

  me.cells = me.cells.map(function(c, i) {
    // seed cell with x and y coor.
    var x = i % cols;
    var y = Math.floor(i/cols);
    return new Cell();
  });

  me.getCell = function(x, y) {
    // TODO: torus grid ??
    return me.cells[x+y*cols];
  }

  me.update = function(engine, delta) {
    // TODO: update game
  }

  me.draw = function(ctx, delta) {
    ctx.save();
    ctx.translate(x, y);

    // Drawing grid shape
    ctx.fillStyle = me.background;
    ctx.fillRect(0, 0, cols*width, rows*height);

    ctx.fillStyle = me.foreground;

    var currX = 0;
    for(var i = 0; i < cols; i++) {
      ctx.beginPath();
      ctx.moveTo(currX, 0);
      ctx.lineTo(currX, rows*height);
      ctx.closePath();
      ctx.stroke();
      currX += width;
    }

    var currY = 0;
    for(var j = 0; j < cols; j++) {
      ctx.beginPath();
      ctx.moveTo(0, currY);
      ctx.lineTo(cols*width, currY);
      ctx.closePath();
      ctx.stroke();
      currY += height;
    }

    // Draw cells in the grid
    ctx.fillStyle = me.cellColor;
    var livingCells = me.cells.filter(function(c) {
      return c.isAlive;
    }).forEach(function(c) {
      ctx.fillRect(c.x*width, c.y*height, width, height);
    });


    ctx.restore();
  }

  return me;
}