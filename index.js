// Solution to Question 1
//Differences between mutating array methods and non- mutating array methods
//Mutating array methods are the methods that changes the object after the method has been used.
//Examples of Mutating array methods
// 1.push();
// 2.unshift();
// 3.pop();
// 4.shift();
// 5.splice();
//Non-mutating array methods do not change the object after the method has been used.
//Examples of Non-Mutating array methods
// 1.concat();
// 2.slice();
// 3.spread operator
// 4.map();
// 5.filter();

// Solution to Question 2
let arrayOfLang = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
//1. Adding kotlin to the array
arrayOfLang.push("Kotlin");
//2. Adding Java after Ruby
arrayOfLang.splice(3, 0, "Java");
// 3. Removing the first item of the array
arrayOfLang.shift();
// 4.Adding ’Scala’ and ‘Swift’ to the beginning of the array
arrayOfLang.unshift("Scala", "Swift");
// 5.Replacing ‘PHP’ with ‘Go’ and ‘Rust’
arrayOfLang.splice(5, 1, "Go", "Rust");
console.log(arrayOfLang);

// Solution to Question 3
// The value of fruit will be undefined after invoking the changeFruit function

// Solution to Question 4
//Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
function maxValue() {
	const myArray = [4, 3, 2, 5, 10, 15];
	console.log(Math.max(...myArray));
}
maxValue();

// Solution to Question 5
// Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
function valTimesIndex() {
	const numbers = [45, 4, 9, 16, 25];
	numbers.map((value, index) => {
		console.log(value * index);
		// return value * index;
	});
}
valTimesIndex();
