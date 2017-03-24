var Cell = function() {
  var me = this;

  me.neighbors = [];

  me.getNeighbors = function() {
    return me.neighbors;
  }


  return me;
}
