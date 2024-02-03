// 1.ways to print in javascript
//console.log("Hello World Kumar sahil", 4 + 6, "Another log");
//alert("me")
//document.write("this is  document")

// 2.JavaScript Console API
//console.log("Hello World sahil")
//console.warn("this is a warning");
//console.error("this is an error");

// 3. Java Script Variables
// for commenting more than one line at once press cntrl + /
// Multi
// line
// comment

//Data types
var number1 = 34;
var number2 = 44;
console.log(number1 + number2);

//String
var str1 = "my name is kumar sahil";

//objects

var marks = {
  ravi: 34,
  sahil: 65,
  anmol: 54,
};

//Booleans
var a = true;
var b = false;
console.log(a, b);

//var und = undefined
/*
var und;
console.log(und);
or;
console.log(undefined);
*/
/*
There are two types of datatypes in java scipt
1. Primitive Data type : undefined, null, number, string, boolean, symbol
2. Reference Data Types : Arrays and Objects
*/

//Array
var arr2 = [1, 2, 3, 4, "sahil"];

// functions in javascript
function avg(a, b) {
  return (a + b) / 2;
}
c = avg(2, 3);
c1 = avg(45, 65);
console.log(c, c1);

//to bring more than one cursor press alt and left click

//conditional in javascript
//if else
var age = 8;
if (age > 8) {
  console.log("you are not kid anymore");
} else if ((age = 8)) {
  console.log("you are equal");
} else {
  console.log("you are kid");
}

//loops in java scipt
var a = [23, 43, 56, 74, 2, 46, 78];

//console.log(a);
//for (var i = 0; i < a.length; i++) {
//  console.log(a[i]);
//}
/*
a.forEach(function (element) {
  console.log(element);
});

j = 0;
while (j < a.length) {
  console.log(a[j]);
  j++;
}
*/

let myarr = ["fan", "camera", 34, null, true];
//Array Methods
console.log(myarr.length);
myarr.pop();
myarr.push("sahil");
myarr.shift();
console.log(myarr);

//replace a string
let mystring = "my name is sahil";
console.log(mystring);
d = mystring.replace("sahil", "rohan");
console.log(d);

//string method in javascript
let mylovelystring = "my name is Kumar";
console.log(mylovelystring.length);
console.log(mylovelystring.indexOf("Kumar"));
console.log(mylovelystring.lastIndexOf("Kumar"));
console.log(mylovelystring.slice(1, 4));

//date
let mydate = new Date();
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getDay());
console.log(mydate.getMinutes());
console.log(mydate.getHours());

//DOM manupulation
let elem = document.getElementById("click");
console.log(elem);

let elemclass = document.getElementsByClassName("container");
console.log(elemclass);
elemclass[0].style.background = "yellow";
elemclass[1].classList.add("bg-primary");

elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
tn = document.getElementsByTagName("div");
// console.log(tn)
createdElement = document.createElement("p");
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement("b");
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element

// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

function clicked() {
  console.log("The button was clicked");
}

function blue()
{
    document.getElementById('click').style.color = "blue"
}
