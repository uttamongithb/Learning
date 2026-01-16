let num = 15;
let temp = "Yes";
for(let i=2; i<=num/2; i++){
    if(num%i==0){
        temp = "No";
    }
}

console.log(temp);