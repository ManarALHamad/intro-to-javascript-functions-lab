
//📎Exercise 1: maxOfTwoNumbers() #practicing 😁

function maxOfTwoNumbers(x, y){

    if (x >= y){

        return x;
    }

    else {

        return y;
    }

}

console.log('Exercise 1 Result:', maxOfTwoNumbers(1, 16));


//📎Exercise 2: isAdult()

function isAdult(age){

    if(age >= 18){

        return 'Adult';
    }
    else 

        return 'Minor';   

}

console.log('Exercise 2 Result:', isAdult(4));

//📎Exercise 3: isCharAVowel()

function isCharAVowel(char) {

    if (char === 'a' || char === 'e' || char === 'i' ||
        char === 'o' || char === 'u') {

        return true;

    } else {

        return false;
    }
}

console.log('Exercise 3 Result:', isCharAVowel("m"));

//📎Exercise 4: generateEmail()

function generateEmail(name, domain) {

    return `${name}@${domain}`;


}
console.log('Exercise 4 Result:', generateEmail("ManarHamad", "gmail.com"));

//📎Exercise 5: greetUser()

function greetUser(name, time){

    return `Good ${time}, ${name}`;

}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

//📎Exercise 6: maxOfThree()

function maxOfThree(x, y, z){

        if (x >= y && x >= y){

            return x;
        }
        else if (y >= x && y >= z){

            return y;
        }

        else {

            return z;
        }

}

console.log('Exercise 6 Result:', maxOfThree(17, 4, 9));


//📎Exercise 7: calculateTip()

function calculateTip(bill, tip){


    return bill * tip /100;


}

console.log('Exercise 7 Result:', calculateTip(50, 20));

//📎Exercise 8: convertTemperature()

function convertTemperature(temp, scale){

    if (scale === "C"){

        return (temp * 9 / 5) + 32;
    }

    else if (scale === "F"){

        return (temp - 32) * 5 / 9;
    }
 

}

console.log('Exercise 8 Result:', convertTemperature(20, "C"));


//📎Exercise 9: basicCalculator()

function basicCalculator(x, y, operation ) {

if (operation === "add"){

    return x + y;
}

else if (operation === "subtract"){

    return x - y;
}

else if (operation === "multiply"){

    return x * y;
}

else if (operation === "divide"){

    return x / y;
}


}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));


//I Enjoyed this homework 😍


