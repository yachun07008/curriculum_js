// 課題
function addText() {
    //①入力欄のテキストを取得
    let ip = document.getElementById('text1').value;
    //②出力欄のテキストエリアを取得
    let op = document.getElementById('area1');
    //③出力欄に入力された文字列を足していく
    op.value += ip + "\n";
}

function deleteText() {
    //④出力欄のテキストを空にする
    let ip = document.getElementById('text1');
    ip.value = '';
    //⑤入力欄のテキストを空にする
    let op = document.getElementById('area1');
    op.value = '';
}



console.log('');
console.log('');
console.log('学習内容');

// addEventListener
document.querySelector('#createBtn').addEventListener('click', function () {
    let item = document.createElement('li');
    item.textContent = 'item';

    let ul = document.querySelector('ul');
    ul.appendChild(item);
});

// HTMLのクリックイベント
function cB() {
    let item = document.createElement('li');
    item.textContent = 'item';
    let ul2 = document.querySelector('.oc');
    ul2.appendChild(item);
}