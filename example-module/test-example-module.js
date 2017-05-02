const mocha = require('mocha');
const myModule = require('./example-module');
const assert = require('chai').assert;

describe('Example Module', ()=> {
    it("Should have a property 'foo' equal to 'bar'", ()=> {
        assert.equal(myModule.foo, 'bar');
    });

    it("Should have a method 'baz' that returns 'foobar'", ()=> {
        assert.equal(myModule.baz(), 'foobar');
    });
});
