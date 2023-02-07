let arr = [12, 54, 32, 12, 1, 5, 7];
let x = 100;
let index = 7;
function insertNumberToArray(arr, x, index) {
    
    if (index < 0 || index > arr.length) {
        return arr;
    } else {
        arr.splice(index, 0, x);
        return arr;
    }

}

document.getElementById("result").innerHTML = insertNumberToArray(arr, x, index);