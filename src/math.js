// src/math.js
function divide(a, b) {
  if (b == 0) {        // bug + code smell
    return 0;
  }
  return a / b;
}

function unusedFunction() {
  const x = 10;        // unused variable
}

module.exports = {
  divide,
  unusedFunction,
};

