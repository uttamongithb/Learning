let n = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/);

let t = [22, 23, 0, 1, 2, 3, 4, 5]
let s = +n[0]
let time = +n[1]
let day = n[2]


if (day.toString() == "Weekday") {
    if (s <= 5) {
        if (!t.includes(time)) {
            console.log(50)
        } else {
            console.log(60)
        }
    } else {
        let s1 = s - 5;
        let pr = 50 + (s1 * 12);

        if (!t.includes(time)) {
            console.log(pr);
        } else {
            let p = pr + (pr / 5)
            console.log(p);
        }
    }
} else {
    if (s <= 5) {
        if (!t.includes(time)) {
            console.log(50)
        } else {
            console.log(60)
        }
    } else {
        let s1 = s - 5;
        let pr = 50 + (s1 * 15)
        if (!t.includes(time)) {
            console.log(pr)
        } else {
            let p = pr + (pr / 5)
            console.log(p)
        }
    }

}

