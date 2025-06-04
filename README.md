# Anagram Generator

This repository provides a simple web page for exploring anagrams. The page contains a text box where you can enter a word and a **Generate** button that displays every distinct anagram that can be formed from the letters you supplied.

## Using the web page

1. Open `anagram.html` in any modern browser.
2. Type a word in the input field.
3. Click **Generate** to display all unique permutations of that word.

The logic behind the page is a JavaScript function that recursively permutes the input string and collects the results in a `Set` so duplicates are removed. The same function is exposed as `generateAnagram` in `generateAnagram.js` for use outside of the browser.

## Running tests

Install dependencies and run the Jest test suite:

```bash
npm install
npm test
```
