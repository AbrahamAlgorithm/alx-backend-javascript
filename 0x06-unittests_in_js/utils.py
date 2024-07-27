const Utils = {
  calculateNumber: (type, a, b) => {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    // Other types can be added as needed
  }
};

module.exports = Utils;

