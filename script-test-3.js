let n = parseInt(prompt('Nhập số cần kiểm tra:'));

function isFibonacci(number) {
    let sum = 0;
    let a = 0;
    let b = 1;
    if (number === 0) {
        return true;
    } else {
        for (let i = 1; sum < number; i++) {
            a = b;
            b = sum;
            sum = a + b;
            if (number === sum) {
                return true;
            }
        }
    }
    return false;
}

console.log(isFibonacci(n));