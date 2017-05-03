module.exports= {
    foo: 'bar',
    baz: ()=> {
        return 'foobar';
    }
}

if(require.main == module){
    console.log(module.exports.baz());
}