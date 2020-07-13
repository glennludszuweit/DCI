const constant = 1;
console.log(constant);

function localScope1() {
    const constant = 2;
    console.log(constant);
  
    function localScope2() {
        const constant = 3;
        console.log(constant);
    }
  
    localScope2();
}

localScope1();
