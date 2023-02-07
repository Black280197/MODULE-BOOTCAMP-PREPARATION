

function sumOfListPrime(x) {
    let sum = 0;
    if (x >= 0) {
        for (let i = 0; i <= x; i++) {
            sum += i;
        }
    } else {
        for (let j = 0; j >= x; j--) {
            sum += j;
        }
    }
    return sum;
}
function xuat() {
    let x = parseInt(document.getElementById("nhap").value);
    console.log(x);
    document.getElementById("result").innerHTML = sumOfListPrime(x);
}