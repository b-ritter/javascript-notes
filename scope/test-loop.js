const mocha = require('mocha');
const loop = require('./loop');
const assert = require('chai').assert;

describe('Simple Loop', ()=> {
    let result;

    before(()=>{
       result = loop();
    });

    it("i should equal 10", ()=> {
        assert.equal(result["i"], 10);
    });

    it("x should equal 9", ()=> {
        assert.equal(result["x"], 9);
    });
});