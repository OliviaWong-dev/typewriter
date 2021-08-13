const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   process.stdout.write(char);
// }


// const next = function () {
//   result = 1000
//   result += 1000
//   return result
// }


// setTimeout(() => {
//   for (let i = 0; i < sentence.length; i++) {
//     process.stdout.write(sentence[i]);
//   }
// }, next
// )

let delay = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      process.stdout.write('\n');
    }
  } , delay);
  delay += 50;
}

