// 課題
// 問１
let scores = [10, 15, 20, 25];

console.log(scores);

for (let i = 0; i < scores.length; i++) {
    if (i % 2 === 0) {
        console.log(scores[i] + 'は偶数です');
    }
}

console.log("");
// 問２
let car = {
    gass: 20.5,
    num: 1234
};

console.log(car);

console.log('ガソリンは' + car.gass + 'です');
console.log('ナンバーは' + car.num + 'です');


console.log("");
console.log("");
console.log("学習内容");
// 配列
let s = [50, 60, 70, 80, 90];
console.log(s[2]);
console.log(s.length);

for (let i = 0; i < s.length; i++) {
    console.log("得点は" + s[i] + "点です。");
}

let human = {
    name: 'yamada',
    heifht: 170,
    weight: 60,
    gender: '男',
    age: 30,
};