function substituiPares(arr) {
    if (!arr) return -1;
    if (!arr.length) return -1;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            console.log("índice é zero");
        } else if (arr[i] % 2 === 0) {
            console.log(`substituindo ${arr[i]} por 0...`);
            arr[i] = 0;
        }
    }

    return arr;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(false));