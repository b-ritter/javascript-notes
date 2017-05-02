const definer = function() {
    const f = undefined;

    if(true) {
        const f = 'foo';
    }

    if(true){
        var b = 'bar';
    }

    return [f, b]
}

module.exports = {
    definer: definer
}

if(require.main == module){
    console.log(definer());
}