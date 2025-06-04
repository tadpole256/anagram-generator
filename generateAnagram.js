function generateAnagram(word) {
  if (typeof word !== 'string') {
    throw new TypeError('word must be a string');
  }

  const results = new Set();

  function permute(prefix, remaining) {
    if (remaining.length === 0) {
      results.add(prefix);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      permute(prefix + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
    }
  }

  permute('', word);

  return Array.from(results);
}

module.exports = generateAnagram;
