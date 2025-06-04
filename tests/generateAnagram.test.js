const generateAnagram = require('../generateAnagram');

test('generateAnagram returns a string containing the same letters as the input', () => {
  const word = 'listen';
  const result = generateAnagram(word);
  expect(typeof result).toBe('string');
  expect(result.length).toBe(word.length);
  expect(result.split('').sort().join('')).toBe(word.split('').sort().join(''));
});
