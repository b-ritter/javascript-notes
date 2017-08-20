const loop = function() {
    var x;
    
    for(var i = 0; i < 10; i++){
        x = i;
    }

    return {
        "x": x,
        "i": i
    }
}

module.exports = loop;

if(require.main == module){
    console.log(loop());
}