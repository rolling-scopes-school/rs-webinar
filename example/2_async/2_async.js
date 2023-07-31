/**
 * Пример синхронного исполнения кода
 */
function summ() {
    let counter = 0;
    for (let i = 0; i < 100000; i += 1) {
        //Какие-то вычисления
        counter += 1;
    }
    console.log('Завершение длительных вычислений.(2)', counter);
}
console.log('Начало выполнения кода.(1)');
summ();
console.log('Завершение выполнения кода.(3)');

/**
 * Пример aсинхронного исполнения кода
 */
// async function asyncSumm() {
//     let result = await function () {
//         let counter = 0;
//         for (let i = 0; i < 100000; i += 1) {
//             //Какие-то вычисления
//             counter += 1;
//         }
//         return counter;
//     }();
//     console.log('Завершение длительных вычислений.(2)', result);
// }
// console.log('Начало выполнения кода.(1)');
// asyncSumm();
// console.log('Завершение выполнения кода.(3)');

/**
 * Пример aсинхронного исполнения кода с использованием таймера
 */
// function timer() {
//     setTimeout(() => {
//         console.log('Завершение длительных вычислений.(2)');
//     }, 1000);
// }
// console.log('Начало выполнения кода.(1)');
// timer();
// console.log('Завершение выполнения кода.(3)');