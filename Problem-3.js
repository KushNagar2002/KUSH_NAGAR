function generateOddSeriesUpToA(a) {
  let count = a % 2 === 0 ? a - 1 : a;

  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }

  console.log(result.join(", "));
}

generateOddSeriesUpToA(1);
generateOddSeriesUpToA(2);
generateOddSeriesUpToA(4);
generateOddSeriesUpToA(6);
