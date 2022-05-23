// 課題
class Taiyaki {
    constructor(syurui) {
        this.syurui = syurui;
    }

    nakami() {
        console.log(`中身は${this.syurui}です`);
    }

}

let anko = new Taiyaki('あんこ');
let cream = new Taiyaki('クリーム');
let cheese = new Taiyaki('チーズ');

anko.nakami();
cream.nakami();
cheese.nakami();


console.log("");
console.log("");
console.log("学習内容");
// Humanクラスを作成
class Human {
    // コンストラクタ（yamada と25を受け取るための処理）
    constructor(name, height, weight, gender, age) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.age = age;
    }

    // 歩くメソッド（関数）作成
    walk() {
        console.log(`身長${this.height}cm、体重${this.weight}kg、${this.name}という${this.gender}が歩きました。`);
    }
}

// Humanクラスをインスタンス化して、yamadaを作成
let yamada = new Human('yamada', 170, 60, '男', 25);
// suzukiオブジェクト作成
let suzuki = new Human('suzuki', 180, 70, '男', 30)
console.log(yamada.name);
yamada.walk();

