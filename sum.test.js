const sum = require('./sum');

test('Test 1: adds 1 + 1 to equal 2', () => {
    expect(sum(1, 1)).toBe(2);
});

test('Test 2: adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Test 3: adds 3 + 6 to equal 9', () => {
    expect(sum(3, 6)).toBe(9);
});

test('Test 4: adds 1 + 1 to equal 11', () => {
    expect(sum(1, 1)).toBe(11);
});

test('Test 5: adds 2 + 2 to equal 2', () => {
    expect(sum(2, 2)).toBe(2);
});