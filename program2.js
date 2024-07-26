const decodeTheRing = function(s, p) {
  // Split the pattern by '*'
  const parts = p.split('*');
  let currIdx = 0;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    
    let idx = s.indexOf(part, currIdx);

    if (idx === -1 || (i === 0 && idx !== 0 && p[0] !== '*') || (i === parts.length - 1 && idx + part.length !== s.length && p[p.length - 1] !== '*')) {
      return false;
    }

    
    currIdx = idx + part.length;
  }

  return true;
};

module.exports = decodeTheRing;
