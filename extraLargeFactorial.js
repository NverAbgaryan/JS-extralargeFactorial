


const add = (str1, str2) => {

    // we'll need these in the program many times.
    let str1Length = str1.length;
    let str2Length = str2.length;

    // if s2 is longer than s1, swap them.
    if(str2Length > str1Length ){
        let temp = str2;
        str2 = str1;
        str1 = temp;
    }


    let res = '';
    let digit = 0;
    let number1;
    let number2;

    for(let i = 0; i < str1.length; i++){
        number1 = str1[str1.length - 1 - i];
        number2 = str2[str2.length - 1 - i] || 0;
        
        let temp = Number(number1) + Number(number2) + digit;
        
        if(temp >= 10) {
            let d = temp % 10;
            digit = 1;
            res =  String(d) + res
        }else{
            res = String(temp) + res
            digit = 0
        }

        if(i === str1.length - 1) {
            res = digit ? String(digit) + res : res
        }
    }

    return res;
}

const factorial = (n) => {
    let fact = 1;

    for(let i = 2; i <= n; i++) {
        if(Number.isSafeInteger(fact * n)){
            fact = fact * i;
        }else{
            let factX = '0'
            for(let j = 0; j < i; j++){
                factX = add(factX, fact.toString())
            }
            fact = factX
        }
    }
    return fact;
}

console.log(factorial(100))