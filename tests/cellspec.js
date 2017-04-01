/// jasmine test runner

describe("A cell", function() {
  var cell;

  // before each test
  beforeEach(function() {
    cell = new Cell();
    cell.neighbors = cell.getNeighbors().map(function() {
      return new Cell();
    })
  });

  it('is defined', function() {
    expect(Cell).toBeDefined();
  });

  it('has 8 neighbors', function() {
    var neighbors = cell.getNeighbors();
    expect(neighbors).toBeTruthy();

    expect(neighbors.length).toBe(8);
  });

  it('is dead by default', function() {
    expect(cell.isAlive).toBe(false);
  });

  it('should die if it has fewer than 2 live neighbors', function() {
    cell.neighbors[0].isAlive = true;

    expect(cell.shouldDie()).toBe(true);
  });

  it('should live on if it has 2 or 3 live neighbors', function() {
    cell.neighbors[0].isAlive = true;
    cell.neighbors[1].isAlive = true;
    expect(cell.shouldDie()).toBe(false);

    cell.neighbors[2].isAlive = true;
    expect(cell.shouldDie()).toBe(false);
  });

  it('should die if it has more than 3 neighbors', function() {
    cell.neighbors[0].isAlive = true;
    cell.neighbors[1].isAlive = true;
    cell.neighbors[2].isAlive = true;
    cell.neighbors[3].isAlive = true;
    expect(cell.shouldDie()).toBe(true);
  });

  it('should be born if it has exactly 3 neighbors', function() {
    cell.neighbors[0].isAlive = true;
    cell.neighbors[1].isAlive = true;
    cell.neighbors[2].isAlive = true;
    expect(cell.shouldBeBorn()).toBe(true);
  });
})