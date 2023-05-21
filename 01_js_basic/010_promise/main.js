//非同期処理
//同期処理
let a = 0;
console.log(a);
//非同期処理
new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1;
        resolve(a)
    }, 1000);
}).then((b) => {
    console.log(a);
    return b;
}).catch((c) => {
    console.log('catchが実行', c)
});

//この非同期処理は、同期処理の後に実行される