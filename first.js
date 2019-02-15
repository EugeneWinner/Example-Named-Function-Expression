var fun = function fact(x) {
  return x ? x*fact(x-1) : 1;
};

var test = fun; 
fun = null;

alert( test(5) ); 
