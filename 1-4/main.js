// 課題
let number = 1;
while (number <= 100) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FizzBuzz!!');
    } else if (number % 5 === 0) {
        console.log('Buzz!');
    } else if (number % 3 === 0) {
        console.log('Fizz!');
    } else {
        console.log(number);
    }
    number++;
}



console.log('');
console.log('');
console.log('学習内容');
// while文
// let num1 = 1;
// while (num1 <= 100) {
//     console.log(num1);
//     num1++;
// }

// do...while文
// let num2 = 1;
// do {
//     console.log(num2);
//     num2++;
// } while (num2 <= 100);

// if文
// for (let num3 = 1; num3 <= 100; num3++) {
//     console.log(num3);
// }

// break
let num4 = 0;
while (num4 < 5) {
    if (num4 === 3) {
        break
    }
    console.log(num4);
    num4++;
}

// continue文
let num5 = 0;
while (num5 < 5) {
    if (num5 === 3) {
        num5++;
        continue;
    }
    console.log(num5);
    num5++;
}
