// ==============================
// A sub task in the loops and array chapter.
// (Kept original logic; only renamed top-level variables so all tasks can run.)
// ==============================
const numbers_task1 = [1, 2, 3, 4, 5];

function sumOfTripledEvens(array) {
  // NOTE: original code filtered odds and doubled (not "tripled evens");
  // kept as-is per your request to keep code the same.
  const result_task1 = array
    .filter(num => num % 2 !== 0)
    .map(num => num * 2)
    .reduce((sum, num) => sum + num, 0);

  return result_task1;
}
// console.log(sumOfTripledEvens(numbers_task1));


// -------------------------------------------------------------
// Assignments given in loops and array, solution to:
// https://javascript.info/array-methods#tasks
// (Both implementations present; second one renamed to avoid redefinition.)
// -------------------------------------------------------------
let my_string_task2 = "hello-world-123";
let name1_task2 = "Bobby-The-Dude-from-kfc";

function camelize(str) {
  // string is turned into array of strings without dashes
  let string = str.split("-");
  let new_Arr = string[0];

  // Capitalize first letter from index 1 and up
  for (let i = 1; i < string.length; i++) {
    let word = string[i];
    // Capitalize the first letter + rest of word
    new_Arr += word.charAt(0).toUpperCase() + word.slice(1);
  }
  return new_Arr;
}

console.log("camelize:", camelize(name1_task2));

// Alternative solution (renamed to avoid function name clash)
function camelizeAlt(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
// console.log("camelizeAlt:", camelizeAlt(my_string_task2));


// -------------------------------------------------------------
// filterRange (non-mutating)
// -------------------------------------------------------------
let arr_filterRange = [5, 3, 8, 1];
let result_filterRange = [];

function filterRange(arr, a, b) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      result_filterRange.push(arr[i]);
    } else {
      continue;
    }
  }
  return result_filterRange;
}

let filtered_task3 = filterRange(arr_filterRange, 1, 4);
console.log(arr_filterRange + " This is the original array");
console.log(filtered_task3 + " This is the filtered array");

// Alternative:
// function filterRangeAlt(arr, a, b) {
//   return arr.filter(item => (a <= item && item <= b));
// }


// -------------------------------------------------------------
// filterRangeInPlace (mutating)
// -------------------------------------------------------------
function filterRangeInPlace(arr, a, b) {
  // iterate over the array and remove values outside [a, b]
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num < a || num > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr_filterRangeInPlace = [5, 3, 8, 1];
filterRangeInPlace(arr_filterRangeInPlace, 1, 4); // keeps only 1..4
console.log("filterRangeInPlace:", arr_filterRangeInPlace);


// -------------------------------------------------------------
// Sort in decreasing order
// -------------------------------------------------------------
function sortDecreasingOrder(arr) {
  console.log(arr.sort(function (a, b) { return b - a; }));
}

let arr_sortDecreasing = [5, 2, 1, -10, 8];
console.log("original (for decreasing sort):", arr_sortDecreasing);
sortDecreasingOrder(arr_sortDecreasing); // [8, 5, 2, 1, -10]


// -------------------------------------------------------------
// Copy and sort array (non-mutating copy)
// -------------------------------------------------------------
function copySorted(arr) {
  // .toSorted sorts without mutating original (modern JS)
  let new_arr_copySorted = arr.toSorted();
  return new_arr_copySorted;
}

let arr_copySorted = ["HTML", "JavaScript", "CSS"];
console.log("copySorted original:", arr_copySorted); // no changes
let sorted_copySorted = copySorted(arr_copySorted);
console.log("copySorted result:", sorted_copySorted);
console.log("copySorted still original:", arr_copySorted);


// -------------------------------------------------------------
// Shuffle an array
// (Kept the original approach; fixed the local variable name collision.)
// -------------------------------------------------------------
function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr_shuffle = [1, 2, 3];
shuffleArray(arr_shuffle);
console.log("shuffled once:", arr_shuffle);
shuffleArray(arr_shuffle);
console.log("shuffled again:", arr_shuffle);


// -------------------------------------------------------------
// unique()
// -------------------------------------------------------------
function unique(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    // Includes checks if value is in array temp
    // if True, skip. if False add it to array
    if (temp.includes(arr[i])) {
      continue;
    } else {
      temp.push(arr[i]);
    }
  }
  return temp;
}

let strings_unique = [
  "Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let ansr_unique = unique(strings_unique); // Hare, Krishna, :-O
console.log("unique:", ansr_unique);
