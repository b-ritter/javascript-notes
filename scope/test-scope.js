const mocha = require('mocha');
const myModule = require('./scope');
const assert = require('chai').assert;

describe('Blockscope Example', ()=> {
    it("Should return an array", ()=> {
        assert.typeOf(myModule.definer(), 'Array');
    });

    it("Array length should equal 2", ()=> {
        assert.equal(myModule.definer().length, 2);
    });

    it("Array value 0 should equal 'undefined'", ()=> {
        assert.deepEqual(myModule.definer()[0], undefined);
    });

    it("Array value 1 should equal 'bar'", ()=> {
        assert.equal(myModule.definer()[1], 'bar');
    });
});