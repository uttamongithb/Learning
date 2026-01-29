let n = 5;
let m = 5;


for (let i = 1; i <= n; i++) {
    let pt = '';
    for (let j = 1; j <= m; j++) {
        if (i == 1 || j == 1 || i == n || j == m) {
            pt += '* '
        }

        if (i > 1 && i < n && j > 1 && j < m) {
            pt += '  ';
        }
    }
    console.log(pt)
}