const calculateNumber = (type, a, b) => {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
      const first = Math.round(a);
      const second = Math.round(b);
      if (second === 0) {
        return 'Error';
      }
      return first / second;
    }
    return 0;
  };
  
  module.exports = calculateNumber;
