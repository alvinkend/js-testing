const Item = require('../src/12');

test('Is on sale:', () => {
    expect(Item.findByID(3).isOnSale()).toBe(false);
});