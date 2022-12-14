const x = "12345";
//const x = '9876567898765678987656789'

// nomor 1
const countDigit = input => {
  const sum = x => {
    return x
      .toString()
      .split("")
      .map(el => +el)
      .reduce((a, b) => {
        return a + b;
      }, 0);
  };

  const y = sum(input);

  if (y.toString().length > 1) {
    let temp = sum(y);
    if (temp.toString().length > 1) {
      temp = sum(temp);
    }
    return temp;
  } else {
    return y;
  }
};

//console.log(countDigit(x))

// nomor 2
// const saku = (m, n) => {
//   let result = "";

//   let i = m;
//   while (i <= n) {
//     if (i % 5 === 0) {
//       result += "yeah, ";
//       continue;
//     }
//     result += i + ", ";
//     i++;
//   }
//   console.log(result);
// };

// saku(1, 10);

let output = "";
for (let i = 1; i <= 10; i++) {
  if (i % 5 === 0) {
    output += "yeah, ";
    // continue to the next iteration of the loop
    continue;
  }
  output += i + ", ";
}
console.log(output);
