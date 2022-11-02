function sumMix(arr) {
  //   let convertArr = parseInt(arr);
  //   let sum = 0;
  //   for (let index = 0; index < convertArr.length; index++) {
  //     return (sum += convertArr[index]);
  //   }
  const conversion = arr.map((value) => +value);
  let sum = 0;
  for (let index = 0; index < conversion.length; index++) {
    sum += conversion[index];
  }
  return sum;
}

module.exports = sumMix;
