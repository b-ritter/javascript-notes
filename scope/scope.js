const definer = function() {
    const foo = undefined;

    if(true) {
        const foo = 'foo';

    }

    if(true){
        var bar = 'bar';
    }

    return {
        'foo': foo,
        'bar': bar
    }
}

module.exports = {
    definer: definer
}

if(require.main == module){
    console.log(definer());
}