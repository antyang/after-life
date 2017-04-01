var Cell = function(x, y, grid) {
  var me = this;

  me.x = x;
  me.y = y;
  me.grid = grid;

  me.isAlive = false;

  me.getNeighbors = function() {
    return [grid.getCell(x-1, y-1),
            grid.getCell(x-1, y),
            grid.getCell(x-1, y+1),
            grid.getCell(x, y-1),
            grid.getCell(x, y+1),
            grid.getCell(x+1, y-1),
            grid.getCell(x+1, y),
            grid.getCell(x+1, y+1)];
  }

  me.shouldDie = function() {
    var livingNeighbors = me.getNeighbors().filter(function(c) {
      return c.isAlive;
    });

    if(livingNeighbors.length < 2) {
      return true;
    }
    if(livingNeighbors.length > 3) {
      return true;
    }

    return false;
  }

  me.shouldBeBorn = function() {
    var livingNeighbors = me.getNeighbors().filter(function(c) {
      return c.isAlive;
    });

    if(livingNeighbors.length === 3) {
      return true;
    }
    return false;
  }

  return me;
}
