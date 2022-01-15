const wrap = (line, maxLen) => {
  if (typeof line !== 'string') return 'Line input must be a string.';
  if (line.length < 1) return line;
  return line;
};

module.exports = wrap;
