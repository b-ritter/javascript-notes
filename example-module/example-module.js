const Foo = {
    foo: 'bar',
    baz: ()=> {
        return 'foobar';
    }
}

module.exports = Foo;

if(require.main == module){
    console.log(Foo.baz());
}