const params = function(x, f = ()=>x) {
    var x;
    var y = x;
    x = 2;
    return [x, y, f()];
}

module.exports = params;

if(require.main == module){
    console.log(params(1));
}