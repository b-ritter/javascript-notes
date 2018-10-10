const module = {
  x: 42,
  getX: function() {
    return this.x
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42


const f = ()=>this
const g = function() { return this }
const boundG = g.bind(module)
const boundF = f.bind(module)
console.log(f())
console.log(g())
console.log(boundG())
console.log(boundF())