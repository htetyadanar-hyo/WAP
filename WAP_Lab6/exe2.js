function foo(x) {

    let m;

    console.log(x, y);

    if (x > 5) {

        var y = 5; m = x + y;

    } else {

        let z = 15; m = z;

    }

    x = m;

    console.log(x, y);

}


var x = 10;

foo(3);

console.log(x);