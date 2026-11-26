// Number:1

// function loop(){
//     for(let num=1; num<=10; num++){
//         console.log(num);
//     }
// }
// loop()

// Number :2
// function sum(){
//     let count=0;
//     for(let num=1; num<=10; num++){
//         count=count+num;
//     }
//     console.log(count);
// }
// sum()

// Number :3
// function loop(){
//     for(let even=1; even<=20; even++){
//         if(even%2==0){
//             console.log(even);
//         }
//     }
// }
// loop()

// Number :4
// function odd(){
//     for(let odd=1; odd<=20; odd++){
//         if(odd%2!=0){
//             console.log(odd);
//         }
//     }
// }
// odd()

// Number :5
// function factorial(num){
//     let fact=1;
//     for(let i=1; i<=num; i++){
//         fact=fact*i;
        
//     }

//     return fact;

// }
// console.log(factorial(5));

// Number :6
// function table(){
//     let table=5;
//     for(let multiplier=1; multiplier<=10; multiplier++){
//         console.log(table + "*" + multiplier + "=" + table*multiplier);
//     }
// }
// table()

// Number :7
// function rev(){
//     for(let num=10; num>=1; num--){
//         console.log(num);
//     }
// }
// rev()

// Number :8
// function mul(){
//     for(let num=1; num<=30; num++){
//         if(num%3==0){
//             console.log(num);
//         }
//     }
// }
// mul()

// Number :9
// function sum(){
//     let count=0;
//     for(let num=1; num<=50; num++){
//         if(num%2==0){
//             count=count+num;
//         }
//     }
//     console.log(count);
// }
// sum()

// Number :10
//  function sum(){
//     let count=0;
//     for(let num=1; num<=50; num++){
//         if(num%2!=0){
//             count=count+num;
//         }
//     }
//     console.log(count);
// }
// sum()

// Number :11
// function div(){
//     for(let num=1; num<=100; num++){
//         if(num%5==0){
//             console.log(num);
//         }
//     }
// }
// div()

// Number :12
// function fibonacci() {
//     let a = 0;
//     let b = 1;
//     for (let i=1; i<=10; i++) {
//         console.log(a);
//         let next = a + b;
//          b = next;
//         a = b;
//     }
// }
// fibonacci();

// Number :13



// Number :14
// function square(){
//     for(let num=1; num<=10; num++){
//         console.log(num*num);
//     }
// }
// square();

// Number :15

// function square(n){
//     let count=0;
//     for(let num=1; num<=n; num++){
//         count=count+num*num;
//     }
//     return count;
// }
// console.log(square(10));

// Number :16
// function cube(){
//     for(let num=1; num<=10; num++){
//         console.log(num*num*num);
//     }
// }
// cube();

// Number :17
// function smallestNumber() {
//     for (let num = 1; ; num++) {
//         if (num % 3 === 0 && num % 4 === 0) {
//             return num;
//         }
//     }
// }

// console.log(smallestNumber());

// Number :18
// function even(){
//     let count=0;
//     for(let num=1; count<10; num++){
//         if(num%2===0){
//           console.log(num);
//             count++;
//         }
//     }
// }
// even();

// Number :19
// function div(){

//     for(let num=1; num<=100; num++){
//         if(num%2==0 && num%5==0){
//             console.log(num);
//         }
//     }
// }
// div();

// Number :20
function mul(i){
    let sum=0;
    for(let num=1; num<=i; num++){
        if(num%3==0 && num%5==0){
            sum=num+sum;
        }
    }
    return sum;
}
console.log(mul(100));