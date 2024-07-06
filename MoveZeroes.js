function moveZeroes(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  for (let i = count; i < arr.length; i++) {
    arr[i] = 0;
  }
  console.log(arr);
}
moveZeroes([0, 10, 0, 32, 0, 35, 5]);
