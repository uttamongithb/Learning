let arr = [2, 5, 6, 3, 9, 4, 8];

let maxSum = 0;

for(let i=0; i<arr.length-2; i++){
let arrSum = arr[i]+arr[i+1]+arr[i+2];

if(arrSum > maxSum){
    maxSum = arrSum;
}

}

console.log(maxSum)