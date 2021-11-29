const functions = require('./functions');

// toBe -> ONLY FOR PRIMITIVE TYPES
test(`Adds 2 + 2 to equal 4`, () => {
    expect(functions.add(2,2)).toBe(4);
});

// not
test(`Adds 2 + 2 to NOT equal 5`, () => {
    expect(functions.add(2,2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

// toEqual -> FOR REFERENCE TYPES (two objects with different references)
test('User should be Atanas Ivanov object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Atanas', lastName: 'Ivanov' });
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
})