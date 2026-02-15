let s = "dvdf";



let str = '';

let mx = 0;


for(let i=0; i<s.length; i++){
    if(!str.includes(s[i])){
        str += s[i];
        if(str.length > mx){
            mx++;
        }
    }else{
        str = '';
    }
}

console.log(mx);