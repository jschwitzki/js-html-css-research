function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const array = [1, 23, 55, 65, 76, 87, 99, 100];

console.log(filtraPares(array));