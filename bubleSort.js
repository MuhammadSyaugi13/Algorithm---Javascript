let data = [3, 2, 9, 8, 7, 6, 5, 1];

function bubleSort() {
    // loping index
    for (let i = 0; i < data.length - 1; i++) {
        // loping perbandingan data
        for (let j = 0; j < data.length - 1; j++) {
            // algoritma bublesort
            if (data[j] > data[j + 1]) {
                [data[j], data[j + 1]] = [data[j + 1], data[j]];
            }

        }

        console.log(`proses ke-${i + 1} = ${data.join('-')}`);
    }
}

bubleSort();