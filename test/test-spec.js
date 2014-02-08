function Cell(){
	
}

Cell.prototype.alive = function(){
	return false;
} 

Cell.prototype.applyRules = function(){}


describe('Game of Life', function() {
  it('a new cell is dead by default', function(){
	var cell = new Cell()
	expect(cell.alive()).toBe(false)
  });

  it('live cell with less than two live neighbors dies', function(){
	var cell = new Cell();
	cell.neighbours = 1;
	cell.applyRules();
	expect(cell.alive()).toBe(false);
  });


});