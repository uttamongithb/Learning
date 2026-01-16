function findFrequency(a, size) {

    let ans = "";
    for (let i = 0; i < size; i++) {
        if (a[i] != -Infinity) {
            let count = 1;
            for (let j = i + 1; j < size; j++) {
                if (a[i] === a[j]) {
                    count += 1;
                    a[j] = -Infinity;
                }
            }
             ans = ans+ `${a[i]}=${count},`
        }
       

        // Only change code above this line
    }
    console.log(ans)
    return ans;
}

findFrequency([2, 4, 2, 6, 3, 6], 6)
