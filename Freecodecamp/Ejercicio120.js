
// Utiliza el parámetro rest con parámetros de función

const sum = (...args) => {
    const [x, y, z] = args;
    return args.reduce((a, b) => a + b, 0);
  }