// From JavaScript Allongé
// https://leanpub.com/javascriptallongesix/read#closures

const mocha = require('mocha');
const assert = require('chai').assert;


let a = () => {}

let b = (x) => x

let c = (x) => (y) => x

let d = (x) =>
            (y) =>
                (z) => x + y + z

describe('Pure Functions and Closures', ()=> {

    const some_number = () => Math.floor(Math.random()*10)

    it("a() should return {}", ()=> {
        const result = a()
        assert.isUndefined(result)
    });

    it("b('foo') should return 'foo'", ()=> {
        const some_value = some_number()
        const result = b(some_value);
        assert.equal(result, some_value);
    });

    it("c(value1)(value2) should return value1", ()=> {
        const some_value = some_number();
        const some_other_value = some_number();
        const result = c(some_value)(some_other_value);
        assert.equal(result, some_value);
    });

    it("d(x)(y)(z) equals x + y + z", ()=>{
        const x = some_number();
        const y = some_number();
        const z = some_number();
        const sum = x + y + z;
        const result = d(x)(y)(z);
        assert.equal(result, sum);
    });
});
