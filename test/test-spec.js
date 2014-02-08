
describe('Game of Life', function() {
  it('a new cell is dead by default', function(){
	var cell = new Cell()
	expect(cell.alive()).toBe(false)
  });
});