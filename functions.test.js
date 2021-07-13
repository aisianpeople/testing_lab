const { expect } = require('@jest/globals');
const { returnTwo, greeting, add, subtract, multiply, divide} = require('./functions')

test('Should return the number two.', () => {
    expect(returnTwo()).toBe(2);
})

test('Should return a string that says "Hello, {name}.".', () => {
    expect(greeting('James')).toBe("Hello, James.");
    expect(greeting('Jill')).toBe("Hello, Jill.");
})

describe('Math functions ', () => {
    test('should return the sum of two numbers.', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(5, 9)).toBe(14);
    })

    test('should return the difference of two numbers.', () => {
        expect(subtract(1, 2)).toBe(-1);
        expect(subtract(5, 9)).toBe(-4);
    })

    test('should return the multiplication of two numbers.', () => {
        expect(multiply(1, 2)).toBe(2);
        expect(multiply(5, 9)).toBe(45);
    })

    test('should return the division of two numbers.', () => {
        expect(divide(2, 1)).toBe(2);
        expect(divide(10, 5)).toBe(2);
    });
});