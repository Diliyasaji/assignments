// js program to find even no.from an array
var numbers = [1,2,3,4,5,6,7];
var even = [];//array to store even nos.
console.log(`the array is: `,numbers);
for(let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 == 0)
       even.push(numbers[i]);//elements inserted to the end of array even
}
console.log(`Even numbers in an array are: ${even}`);
