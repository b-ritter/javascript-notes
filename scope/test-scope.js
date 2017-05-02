const mocha = require('mocha');
const myModule = require('./scope');
const assert = require('chai').assert;

describe('Blockscope Example', ()=> {
    it("Should return an object", ()=> {
        assert.typeOf(myModule.definer(), 'Object');
    });

    it("Has property 'foo'", ()=> {
        assert.property(myModule.definer(), 'foo')
    });

    it("Has property 'bar'", ()=> {
        assert.property(myModule.definer(), 'bar')
    });

    it("'foo' should equal 'undefined'", ()=> {
        assert.deepEqual(myModule.definer().foo, undefined);
    });

    it("'bar' should equal 'bar'", ()=> {
        assert.equal(myModule.definer().bar, 'bar');
    });
});