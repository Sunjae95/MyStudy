function test() {
    var a = 'var';
    let b = 'let';

    {
        let c = 'let';
        console.log(c);
    }
    console.log(a);
    console.log(b);
    console.log(c); //ReferenceError: c is not defined
}

test();