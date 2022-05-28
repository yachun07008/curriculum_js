// 課題
//btnを取得
const btn = document.getElementById('btn');

// ボタンがクリックされたら、という処理の始まり
btn.addEventListener('click', function () {
    //①配列で「大吉」「中吉」「凶」を準備
    let results = ["大吉", "中吉", "凶"];
    //②乱数を発生させて、その値を取得
    let ram = Math.floor(Math.random() * results.length);
    //③取得した **btn** の「クリック」という文字を配列の中身の文字にランダムに変化させる
    btn.textContent = results[ram];

}, false);


console.log("");
console.log("");
console.log("学習内容");
let box = document.getElementById('box');
let bt = document.getElementById('bt');
bt.addEventListener('click', function () {
    box.style.backgroundColor = 'red';

}, false);

// ボタンが.クリックされたら = アラートを出す
bt.addEventListener('click', function () {
    alert('ボタンがクリックされました');
}, false);