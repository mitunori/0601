// clg と入力 タブキー
console.log(111);

// clgを使って　文字を打つ jsという文字
console.log("js");

// // 変数 = 箱
// const morita_heya_kaisuu = 42
// const maesako_heya_kaisuu = 2

let num = 1;
console.log(num, "num箱");

console.log(2 + 3, "計算中");

console.log("2 + 3", "どうなる？？");

//jQueryを使うときのルール htmlに目印をつけること！
$(".test").on("click", function () {
  // this とは? 今回の場合は .testになります
  $(this).html(num);
});
