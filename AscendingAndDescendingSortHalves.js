function AscendingAndDescendingSortHalves(arr) {
  const mid = Math.floor(arr.length / 2);

  for (let i = 0; i < mid - 1; i++) {
    for (let j = 0; j < mid - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  for (let i = mid; i < arr.length - 1; i++) {
    for (let j = mid; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

return arr
}

const array = [45, 67, 90, 34, 87, 10];
const sortedArray = AscendingAndDescendingSortHalves(array);
console.log(sortedArray); 

