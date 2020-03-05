const repeatLetter = require('../src/08');

test('Array Mirroring:', () => {
    expect(repeatLetter([1, 2, 3])).toEqual([1, 2, 3, 3, 2, 1]);
});