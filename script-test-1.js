let scoreBoard = [5, 9, 8, 6, 7, 2, 4, 10, 5, 3];

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(scoreBoard));