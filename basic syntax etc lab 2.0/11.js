function sumOfOddNumbers(n) {
  let sum = 0;
  let counter = 0;
  let isDone = false;

  for (let i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
    if (i % 2 !== 0) {
      sum += i;
      console.log(i);
      counter++;
    }
    if (counter === n) {
      isDone = true;
      break;
    }
  }
  if (isDone) {
    console.log(`Sum: ${sum}`);
  }
}
sumOfOddNumbers(5);

//   let sum = 0;
//   for (let i = 1; i <= n * 2 - 1; i += 2) {
//     sum += i;
//     console.log(i);
//   }
//   console.log(`Sum: ${sum}`);
