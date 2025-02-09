function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  }
  if (typeof x === 'string' || Array.isArray(x)) {
    return x.length; 
  } else {
    return -1; // Or throw an error: throw new Error('Invalid input type');
  }
}