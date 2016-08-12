const readline = require('readline');

const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThanFirst(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?\n`, response => {
    if (response === 'y')
      callback(true);
    else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1){
    console.log("Inside the inner loop!");
    askIfGreaterThanFirst(arr[i], arr[i + 1], isGreaterThan => {
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });

  }
  else {
    outerBubbleSortLoop(madeAnySwaps);
    // console.log(arr);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps){
      madeAnySwaps = false;
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }
  return outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
// innerBubbleSortLoop([3, 1, 2, 4], 0, false, () => console.log("In the outer loop!"));
