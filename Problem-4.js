function countMultiples(arr) {
    const multiples = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const counts = {};
  
    for (const multiple of multiples) {
      counts[multiple] = 0;
    }
  
    for (const number of arr) {
      for (const multiple of multiples) {
        if (number % multiple === 0) {
          counts[multiple]++;
        }
      }
    }
  
    return counts;
  }
  const inputArray = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
  const result = countMultiples(inputArray);
  console.log(result);