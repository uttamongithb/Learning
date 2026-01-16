let a = [1, 2, 5, 4, 19, 7, 9];
let max = a[0];
let index = 0;

for (let i = 0; i < a.length; i++) {

    if (a[i] > max) {
        max = a[i];
        index = i;
    }

}

console.log(index);







