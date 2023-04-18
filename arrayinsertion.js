// js program to insert element into an array
var array = [1,2,3,4,5,6,7];
console.log(array);
var index = prompt(`enter the required index: `);
var element = prompt(`enter the no.to be changed: `);
for (i = array.length; i > index; i--) {
array[i] = array[i - 1];
}
array[index] = element;
console.log(`the changed array is:`,array);
