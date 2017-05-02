const mocha = require('mocha');
const blockscope = require('./example-module');
const assert = require('chai').assert;

describe('Foo', ()=> {
    it("Should have a property 'foo' equal to 'bar'", ()=>{
        assert.equal(blockscope.foo, 'bar');
    });
});
