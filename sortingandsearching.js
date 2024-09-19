function insertionSort(arr) {
    let n = arr.length;
    
    // Loop through each element of the array, starting from the second element
    for (let i = 1; i < n; i++) {
        let key = arr[i]; // The element to be inserted into the sorted portion
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key; // Place the key in its correct position
    }
    
    return arr;
}

// Example usage
const array = [5, 2, 9, 1, 5, 6];
console.log("Original array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
