function generateOddSeries(a) {
  let result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(", "));
}

generateOddSeries(1);
generateOddSeries(2);
generateOddSeries(5);
