let arr = [2, 4, 6, 7, 4, 8];
function findAvg() {
    let avg = 0;
    for (let i =0; i < arr.length; i++) {
        avg += arr[i];
    }
    avg /= arr.length;
    document.getElementById("avg").innerHTML = "Điểm trung bình: " + avg;
}

findAvg();