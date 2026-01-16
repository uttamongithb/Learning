let a = [-1, -2, -3, -4, -5, -6];
let max = a[0]*a[1]*a[2];
let d = 0;
for(let i=0; i<a.length; i++){
    for(let j=i+1; j<a.length; j++){
        for(let k=j+1; k<a.length; k++){
             d = a[i]*a[j]*a[k];
            if(max<d){
                max=d;
            }
        }
    }
}

console.log(max);
