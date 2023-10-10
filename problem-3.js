const oddNumber = (n) => {
  let ans = [];

  let x = 1;
  if (n % 2 === 0) {
    n = n - 1;
  }
  for (let i = 0; i < n; i++) {
    ans.push(x);
    x += 2;
  }

  return ans;
};

console.log("1", oddNumber(1));

console.log("2", oddNumber(2));

console.log("3", oddNumber(3));
console.log("4", oddNumber(4));

console.log("5", oddNumber(5));
