// 課題
document.getElementById('box').style.backgroundColor = 'red';




console.log('');
console.log('');
console.log('授業内容');
let target = document.getElementById('target');
console.log(target);

function myfunc() {
    // idが「target」の要素を取得して、変数changeに代入
    let change = document.getElementById('target');

    // textContentを使って「こん日は」に書き換える
    change.textContent = 'こんにちは';

}

let elems = document.getElementsByTagName('h1');
// HTMLを上から順番に探した時に、最初に見つかったh1タグが０番目の要素として取得できます。
console.log(elems[0]);
console.log(elems[1]);

let boxs = document.getElementsByName('box');
for (let i = 0; i < boxs.length; i++) {
    console.log(boxs[i]);
}

let boxs2 = document.getElementsByClassName('box');
console.log(boxs2[0]);
console.log(boxs2[1]);
console.log(boxs2[2]);



// DOM
// document.body.textContent = 'hello';
// document.title = 'JavaScript2-1';
// windowオブジェクトの中身をconsole.logで確認してみます
// console.log(window);

// ①location.hrefでURLを取得して変数urlに代入
// let url = window.location.href;

// ②URLを表示
// console.log(url);

// 「Hello World」と表示
// window.alert('Hello World');