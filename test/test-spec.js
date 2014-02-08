function Cell(){
	this._alive = false
}

Cell.prototype.alive = function(){
	return this._alive;
} 

Cell.prototype.applyRules = function(){
	if(this.neighbours === 3) {
		this._alive = true
	}
	if(this.neighbours < 2 || this.neighbours > 3) {
		this._alive = false;
	}
}

describe('Game of Life', function() {
  describe("Board", function() {
    it("creates a board", function() {
      var board = new Board(3, 3)
      expect(board.row(0).length).toBe(3)
      expect(board.rows()).toBe(3)
    })
  })
  
  describe("Cell", function() {
    var cell
    beforeEach(function(){
      cell = new Cell()
    })

    it('is dead by default', function(){
  	  expect(cell.alive()).toBe(false)
    });

    it('live cell with less than two live neighbors dies', function(){
  	  cell._alive = true;
  	  cell.neighbours = 1;
  	  cell.applyRules();
  	  expect(cell.alive()).toBe(false);
    });

    it("a living cell with more than 3 neighbours dies", function(){
  	  cell._alive = true;
  	  cell.neighbours = 4;
  	  cell.applyRules();
  	  expect(cell.alive()).toBe(false); 
    })

    it('dead cell with exactly three live neighbors comes alive', function(){
      cell._alive = false
  	  cell.neighbours = 3;
  	  cell.applyRules();
  		expect(cell.alive()).toBe(true);
  	});
  })
});