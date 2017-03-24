/// jasmine test runner

describe("A cell", function() {
  var cell;

  // before each test
  beforeEach(function() {
    cell = new Cell();
  });

  it('is defined', function() {
    expect(Cell).toBeDefined();
  });

  it('has neighbors', function() {
    var neighbors = cell.getNeighbors();
    expect(neighbors).toBeTruthy();
  });
})