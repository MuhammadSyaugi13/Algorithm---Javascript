let arr = [5, 4, 2, 6, 1];

for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
        if (arr[j] < arr[j - 1]) {
            const temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
}
console.log(arr);
