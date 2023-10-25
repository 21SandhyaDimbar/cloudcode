let arr = [5, 2, 9, 3, 6];
function DescendingSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // Swap elements if they are in the wrong order
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

let sorting = DescendingSort(arr);
console.log(sorting);
