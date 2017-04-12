// $(document).ready(function(){
//   $("#btn").click(function(e){
//     console.log("event", e);
//     console.log("event.target", e.target);
//     console.log("this", $(this)); //event.target as jquery object
//     console.log("this", this); // event.target
//   });
// });
  // this.a = 37;
  // console.log(window.a);

  // var fubar = "42"; //global variable

//EXAMPLE 1:
  // function baz(){
  //   console.log("inside baz");
  //   bar();
  // }

  // function bar(){
  //   console.log("inside bar");
  //   foo();
  // }

  // function foo(){
  //   console.log("inside foo");
  //   var fubar = "13";
  //   console.log("this", this); //goes to the top most object, which is window
  //   console.log("fubar", this.fubar); //references the window. if it was in doc.ready() it would be jquery object
  //   console.log("local fubar", fubar);
  // }

  // baz(); //exectues all other functions, which is on window object

//EXAMPLE 2:
// var a = 3;
// function foo(){
//   console.log("this", this);//obj
//   console.log("a", this.a);//closest object to monkey. will log 2
// }

// var obj = {
//   a: 2,
//   monkey: foo
// };

// obj.monkey(); //starts with monkey function, and then goes over to obj

// foo(); //returns window

//EXAMPLE 3:
// function foo(){
//   console.log("this", this); //obj2
//   console.log("a", this.a); //32
// }

// var obj2 = {
//   a: 32,
//   foo: foo
// };

// var obj1 = {
//   a: 2,
//   obj2: obj2
// };

// obj1.obj2.foo();

//EXAMPLE 4:
// function foo(){
//   console.log("this", this);
//   console.log("a", this.a);
// }

// var obj = {
//   a: 2,
//   foo: foo
// };

// var bar = obj.foo;

// var a = "global warming";

// obj.foo(); // this = obj, a = 2

// bar(); // this = window, a = "global warming"

//EXAMPLE 5:
// function foo(){
//   console.log("this", this); // window
//   console.log("a", this.a); // "global"
// }

// function doFoo(fn) { //callback function, passing in a function and calling a function inside function
//   return fn();
// }

// var obj = {
//   a: 2,
//   foo: foo
// };

// var a = "global";

// doFoo(obj.foo); // passes in foo

// //doFoo(function foo(){ //this is what it reall is ^^^^^^^^^^^^^
// //   console.log("this", this); // window
// //   console.log("a", this.a); // "global"
// // })























































