// 課題
function createJuice(fruits) {
    console.log(fruits + "を受け取りました。ジュースにして返します");
    return fruits + "ジュース";
}

let orangeJuice = createJuice('みかん');
console.log(orangeJuice + 'が届きました');

//①関数名を適切なものに変えてください
//②仮引数を適切なものに変えてください
// function ジュース工場(果物) {
//③「〇〇を受け取りました。ジュースにして返します」と出力

//④受け取った果物にジュースという文字列を結合して、呼び出し元に返す

// }
//⑤関数の実行：「みかん」を渡して、結果を受け取れるように適当な変数（orangeJuice）を用意
//⑥返ってきた変数を利用して「〇〇が届きました」と出力する

console.log('');
console.log('');
console.log('学習内容');
// 関数化
// 定義
function japanese() {
    console.log('おはよう');
    console.log('こんにちは');
    console.log('こんばんは');
    console.log('日本語は時間帯によって挨拶が変わります');
    console.log('ひらがな');
    console.log('カタカナ');
    console.log('漢字');
    console.log('３種類も文字があります');
}
// 呼び出す
japanese();
japanese();


