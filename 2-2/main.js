// 課題
function changeBtn() {
    let pOne = document.getElementById('p1');
    console.log(pOne);
    let situation = pOne.style.display;
    if (situation !== "none") {
        pOne.setAttribute("style", "display:none")
    } else {
        pOne.setAttribute("style", "display:block")
    }

}





console.log('');
console.log('');
console.log('学習内容');

let box = document.querySelector('.box');
console.log(box);
// 最初に見つかったbox1だけ取得される。

let box2 = document.querySelector('#box');
console.log(box2);

let boxClass = document.querySelectorAll('.box');
for (let i = 0; i < boxClass.length; i++) {
    console.log(boxClass[i]);
}

// formタグの中にあるクラス名がboxのもの全て
console.log('');
console.log('formタグの中にあるクラス名がboxのもの全て');
let elems1 = document.querySelectorAll('form > .box');
for (let i = 0; i < elems1.length; i++) {
    console.log(elems1[i]);
}

// input要素のtype属性がradioの要素全て
console.log('');
console.log('input要素のtype属性がradioの要素全て');
let elems2 = document.querySelectorAll('input[type=radio]');
for (let i = 0; i < elems2.length; i++) {
    console.log(elems2[i]);
}
