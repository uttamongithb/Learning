let n = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/);
let pt;

for (let i = 0; i < n; i++) {
    pt = ''
    for (let j = 1; j <= n - i; j++) {
        pt += j;
    }

    if (i > 0) {
        for (let m = 1; m <= (i * 2) - 1; m++) {
            pt += ' ';
        }
    }


    if (i == 0) {
        for (let k = n - 1; k >= 1; k--) {
            pt += k;
        }
    } else {
        for (let k = (n - i); k >= 1; k--) {
            pt += k;
        }
    }





    console.log(pt);
}

for (let i = 1; i <= n; i++) {
    pt = ''
    for (let j = 1; j <= i; j++) {
        pt += j;
    }

    for (let m = (2 * n) - (2 * i) - 1; m > 0; m--) {
        pt += ' ';
    }

    if (i == n) {
        for (let k = n - 1; k >= 1; k--) {
            pt += k;
        }
    } else {
        for (let k = i; k >= 1; k--) {
            pt += k;
        }
    }

    console.log(pt)
}
