# Loops & Arrays – JS Tasks

Small JavaScript practice tasks covering array methods, iteration, filtering, sorting, shuffling, and deduplication.  
Open `index.html` and check the **browser console** to see outputs from each task.

## What’s inside

- **A sub task in loops & arrays**
  - `sumOfTripledEvens(array)` – _kept original logic as written in the exercise code notes._
- **Camelize (two versions)**
  - `camelize(str)` – manual split/capitalize/join
  - `camelizeAlt(str)` – alternative with `map`
- **filterRange (non-mutating)**
  - `filterRange(arr, a, b)` – returns values in `[a, b]` without modifying the original array (uses a separate `result_filterRange` array)
- **filterRangeInPlace (mutating)**
  - `filterRangeInPlace(arr, a, b)` – removes values outside `[a, b]` from the same array
- **Sort (decreasing)**
  - `sortDecreasingOrder(arr)` – sorts numbers descending
- **Copy & sort**
  - `copySorted(arr)` – returns a sorted copy using modern `toSorted()` (original array remains unchanged)
- **Shuffle**
  - `shuffleArray(array)` – simple `sort(() => Math.random() - 0.5)` demo
- **unique**
  - `unique(arr)` – returns a new array with duplicates removed (preserves first occurrence order)

## How to run

1. Clone or download the repo.
2. Open `index.html` in your browser.
3. Open the **DevTools Console** to see outputs.

> **Note:** This project uses modern JavaScript features like `Array.prototype.toSorted()`. Use a recent browser (Chrome/Edge/Firefox/Safari) for best compatibility.

## File structure

