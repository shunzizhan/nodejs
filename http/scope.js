var a = "123";

function g(){
  var b = "456";
  console.log('////全局');
  console.log(a);
  console.log(b);
  a = "123aaaa";
  console.log(a);
  function ig(){
    console.log('////全局内');
    console.log(a);
    console.log(b);
    var c = "789";
    console.log(c);
  }
  ig();
}
g();