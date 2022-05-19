// 課題
// 問1
// a !== 10
// b >=10 && b < 20 && b % 2 === 0

// 問2
let x = 10;
if (x >= 10 && x <= 20) {
    console.log('成功です');
} else {
    console.log('失敗です');
}

// 問3
let y = 0;
if (y % 2 === 0) {
    console.log('偶数です');
} else if (y % 2 !== 0) {
    console.log('奇数です');
}



console.log("");
console.log("");
console.log("学習内容");
// 学習内容
let num1 = 10;
let num2 = 4;
let result;

// 足し算
result = num1 + num2;
console.log(result);

// 引き算
result = num1 - num2;
console.log(result);

// 掛け算
result = num1 * num2;
console.log(result);

// 割り算
result = num1 / num2;
console.log(result);

// 余剰
result = num1 % num2
console.log(result);

// 文字結合の例
// HelloとWorldに空白を入れたい時は、Helloの直後かWorldの直前にスペースを入れる
console.log('Hello ' + 'World');

// 変数結合の例
let lastName = '田中';
let firstName = '一郎';
let fullName = lastName + firstName;
console.log(fullName);

// let x = 10;
x++;
console.log(x); //11
// let y = 10;
y--;
console.log(y); //9


console.log("");
// 条件分岐
let score = 80;
if (score >= 70) {
    console.log('合格');
} else if (score === 0) {
    console.log('0点はまずいです汗');
} else {
    console.log('不合格');
}

console.log("");
// 論理演算子
// 変数aが10~20の時
let a = 15;
if (a >= 10 && a <= 20) {
    console.log(a);
}

let b = 10;
let c = 15;
// 偶数の条件式
if (b % 2 === 0) {
    console.log(b);
}

// 奇数の条件式
if (c % 2 !== 0) {
    console.log(c);
}