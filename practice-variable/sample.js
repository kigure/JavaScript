// var let const の中で変数の再宣言ができるのはvarだけ！
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"

// // constは constantの略、意味は定数や不変！定数は変わらないので、再代入してもエラーが出る！
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// var str = "webcamp" //グローバルスコープ

// function foo(){
//   console.log(str)
//   var y = "Hello" //関数スコープ
// }

// foo()
// console.log(y)

// let money = 1000;
// let apple_price = 200;

// function pay(){
//   if(money > apple_price){
//     alert("りんごは買えるよ")
//   }else if(money == apple_price){
//     alert("お釣りはないよ");
//   }else{
//     alert("りんごは買えないよ");
//   }
//   }

// pay()

// function foo(){
//   let x = "world"
//   {
//     var y ="hello world" 
//   }
//   console.log(x)
//   console.log(y)
// }
// foo()

// for (let i =0;i < 10;i++) {
//   console.log(i);
// }

// console.log(i)

var str = "webcamp"

function foo(){
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()