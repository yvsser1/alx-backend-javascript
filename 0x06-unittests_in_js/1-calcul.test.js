function calculateNumber(type, a, b) {
    // Round the input numbers
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
  
    // Perform operation based on type
    switch (type) {
      case 'SUM':
        return roundedA + roundedB;
      case 'SUBTRACT':
        return roundedA - roundedB;
      case 'DIVIDE':
        // Check for division by zero
        if (roundedB === 0) {
          return 'Error';
        }
        return roundedA / roundedB;
      default:
        throw new Error('Invalid operation type');
    }
  }
  
  module.exports = calculateNumber;