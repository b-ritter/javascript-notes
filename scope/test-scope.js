const mocha = require('mocha');
const definer = require('./scope');
const assert = require('chai').assert;

describe('Blockscope Example', ()=> {
    var vals = null;

    before(()=>{
        vals = definer();
    });

    it("Should be a function", ()=> {
        assert.typeOf(definer, 'Function');
    });

    it("Should return an object", ()=>{
        assert.typeOf(vals, 'Object');
    });

    it("vals.bar should equal 'bar'", ()=> {
        assert.equal(vals.bar, 'bar');
    });

    it("vals.bar should equal 'foo'", ()=> {
        assert.isUndefined(vals.foo);
    });
});