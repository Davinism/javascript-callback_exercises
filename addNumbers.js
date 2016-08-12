const readline = require('readline');

const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

const addNumbers = function (sum, numsLeft, completionCallback) {
  if (numsLeft <= 0) {
    reader.close();
    return completionCallback(sum);
  }
  reader.question("Enter the number: ", response => {
    const num = parseInt(response);
    addNumbers(sum + num, numsLeft - 1, completionCallback);
  });
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
