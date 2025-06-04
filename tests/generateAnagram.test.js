const generateAnagram = require('../generateAnagram');

test('generateAnagram returns all unique anagrams of the input word', () => {
  const word = 'abc';
  const result = generateAnagram(word);

  expect(Array.isArray(result)).toBe(true);
  const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
  expect(result.sort()).toEqual(expected.sort());
});
