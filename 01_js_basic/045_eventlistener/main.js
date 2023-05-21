const h1Element = document.querySelector('h1');
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = '変更後のタイトル';

//イベントリスナ
const btnEl = document.querySelector('button');
btnEl.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    console.log('ボタンがクリックされました');
    });

//イベントリスナの簡略化
/*
const btnEl1 = document.querySelector('#btn1');
const helloFn = (e) => {
    console.log(e.target.textContent);
    console.log('ボタンがクリックされました'); 
};
btnEl1.addEventListener('click', helloFn);
*/