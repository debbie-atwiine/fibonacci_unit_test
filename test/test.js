const assert = require('chai').assert;
const fibonacci = require('../fibonacci');

describe('Testing fibonacci series for given numbers', () => {
    it('should return 0 when given 0', () => {
        assert.equal(fibonacci(0), 0);
    });

    it('should return 1 when given 1', () => {
        assert.equal(fibonacci(1), 1);
    });
    
    it('should return 1 when given 2', () => {
        assert.equal(fibonacci(2), 1);
    });
    
    it('should return 3 when given 4', () => {
        assert.equal(fibonacci(4), 3);
    });
    
    it('should return 5 when given 5', () => {
        assert.equal(fibonacci(5), 5);
    });
    
    it('should return 13 when given 7', () => {
        assert.equal(fibonacci(7), 13);
    });

    it('should return 34 when given 9', () => {
        assert.equal(fibonacci(9), 34);
    });

    it('should return 144 when given 12', () => {
        assert.equal(fibonacci(12), 144);
    });

    it('should return 377 when given 14', () => {
        assert.equal(fibonacci(14), 377);
    });

    it('should return 610 when given 15', () => {
        assert.equal(fibonacci(15), 610);
    });

    });