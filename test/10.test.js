const censored = require('../src/10');

test('Censor:', () => {
    expect(censored('Saya ingin makan nasi goreng.', ['saya', 'nasi'])).toEqual('#### ingin makan #### goreng.');
});