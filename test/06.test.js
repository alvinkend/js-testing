const repeatString = require('../src/06');

test('String Repeat:', () => {
    expect(repeatString('Makan! ', 3)).toEqual('Makan! Makan! Makan! ')
});