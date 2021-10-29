const apple = {
    value: 2,
}

const orange = {
    value: 3,
}

function mapThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> apple', mapThis(nums, apple));
console.log('this -> orange', mapThis(nums, orange));

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const numsArray = [2, 4, 6, 8, 10];

console.log(mapSemThis(numsArray));