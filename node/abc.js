let arr = [4, 5, 6, 7]

function mthd() {
let temp;
    for (let i = arr.length-1; i>=0; i--) {
     arr[i+1] = arr[i]
    }

    arr[0] = 8;

    console.log(arr)
}

mthd();