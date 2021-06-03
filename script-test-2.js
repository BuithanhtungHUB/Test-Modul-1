let numberArr = [];
let n = parseInt(prompt('Nhập số lượng phần tử của mảng'));
for (let i = 1; i <= n; i++) {
    let element = +prompt('phần tử thứ ' + i);
    numberArr.push(element);
}
let x = parseInt(prompt('Nhập số x'));

function tryRemoveArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == x) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}

console.log(tryRemoveArray(numberArr));