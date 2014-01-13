var convert = function(num) {
  var nums = {
    10: 'X',
    9: 'IX',
    4: 'IV',
    5: 'V',
    1: 'I',
    50: 'L'
  };
  if (nums.hasOwnProperty(num)) {
    return nums[num];
  }
  for (var i = 1; i <= 3; i++) {
    if (nums.hasOwnProperty(num - i)) {
      return convert(num - i) + convert(i);
    }
  }
  return undefined;
};

describe('latin to roman number', function() {

  it('0 should be undefined', function() {
    expect(convert(0))
      .toBe(undefined);
  });

  it('1 should be I', function() {
    expect(convert(1))
      .toBe('I');
  });

  it('5 should be V', function() {
    expect(convert(5))
      .toBe('V');
  });

  it('10 should be X', function() {
    expect(convert(10))
      .toBe('X');
  });

  it('50 should be L', function() {
    expect(convert(50))
      .toBe('L');
  });

  it('100 should be C', function() {
    expect(convert(100))
      .toBe('C');
  });

  describe('multi character numbers', function() {
    describe('post fix', function() {
      it('2 => II', function() {
        expect(convert(2))
          .toBe('II');
      });
      it('3 => III', function() {
        expect(convert(3))
          .toBe('III');
      });
      it('6 => VI', function() {
        expect(convert(6))
          .toBe('VI');
      });
      it('8 => VIII', function() {
        expect(convert(8))
          .toBe('VIII');
      });
    });

    describe('prefix', function() {
      it('9 => IX', function() {
        expect(convert(9))
          .toBe('IX');
      });
      it('4 => IV', function() {
        expect(convert(4))
          .toBe('IV');
      });
    });
  });

});
