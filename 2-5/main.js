// テスト
function changeLang() {
    if (document.getElementById('selected')) {
        let id = document.getElementById('selected').value;
        let ja = document.getElementById('ja');
        let en = document.getElementById('en');
        if (id === document.getElementById('selected_jpn').value) {
            ja.style.display = "";
            en.style.display = "none";
        } else if (id === document.getElementById('selected_en').value) {
            ja.style.display = "none";
            en.style.display = "";
        } else if (id === document.getElementById('selected_all').value) {
            ja.style.display = "";
            en.style.display = "";
        } else {
            ja.style.display = "";
            en.style.display = "";
        }
    }
}



console.log('');
console.log('');
// アロー関数
let sum = (a, b, c) => a + b + c;
let total = sum(10, 20, 30);
console.log(total);

let double = a => a * 2;
let result = double(10);
console.log(result);