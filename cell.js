var Cell = function() {
  var me = this;

  me.neighbors = Array.apply(null, Array(8));

  me.isAlive = false;

  me.getNeighbors = function() {
    return me.neighbors;
  }

  me.shouldDie = function() {
    var livingNeighbors = me.neighbors.filter(function(c) {
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
    var livingNeighbors = me.neighbors.filter(function(c) {
      return c.isAlive;
    });

    if(livingNeighbors.length === 3) {
      return true;
    }
    return false;
  }

  return me;
}
