function creditNum() {
  const numbers = [2,3,4,5,6];
  const newNum = numbers.map(function(element) {
    return element * 2;

  });
}

function creditNum(doubleNum) {
  for (let i = 1; i < doubleNum.length; i+=2) {
    doubleNum[i] *= 2;
}
return doubleNum;
}
