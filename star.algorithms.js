// Star Algorithms
// Algorithm 1: Star Hash (simple hash function)
function starHash(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(16);
}

// Algorithm 2: Star Encryption (simple Caesar cipher)
function starEncrypt(text, shift) {
  return text.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const base = code >= 65 && code <= 90 ? 65 : 97;
      return String.fromCharCode(((code - base + shift) % 26) + base);
    }
    return char;
  }).join('');
}

// Algorithm 3: Star Consensus (simple majority vote)
function starConsensus(votes) {
  const count = {};
  votes.forEach(vote => {
    count[vote] = (count[vote] || 0) + 1;
  });
  return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
}

// Example
console.log('Hash:', starHash('star'));
console.log('Encrypted:', starEncrypt('hello', 3));
console.log('Consensus:', starConsensus(['yes', 'no', 'yes', 'yes']));