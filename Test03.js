

function sumOfListPrime(x) {
    let sum = 0;
    for (let i = 0; i <= x; i++) {
        if (ktnt(i)) {
            sum += i;
        }
    }

    return sum;
}
function xuat() {
    let x = parseInt(document.getElementById("nhap").value);
    console.log(x);
    document.getElementById("result").innerHTML = sumOfListPrime(x);
}

function ktnt(n) {
    let dem = 0;
    if (n <= 2) {
        return false;
    } else {
        for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
            if (n % i === 0) {
                dem++;
            }
        }
    }
    if (dem === 1) return true;
    else return false;
}