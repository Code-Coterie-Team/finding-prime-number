function isPrime(number){
    for (let i = 2 ; i < number ; i++ ){
        if (number % i == 0 ){
            return false;
        }
    }
return true;
}

function primeNumbers(){
    let start = Number((document.querySelector("#start").value));
    let end = Number((document.querySelector("#end").value));
    let result = document.getElementById("result");
    const arrayNumbers = [];
    for(let n = start ; n <= end ; n++){
        if (isPrime(n) == true){
            arrayNumbers.push(n)
        }
    }
    result.innerHTML = arrayNumbers;
}



// function primeNumber(start,end){
// for ( let n = start; n <= end ; n++){
//     for (let i = 2; i < n ; i++) {
//     if ( n % i != 0 ){
//     console.log(n);
//     }
//     else{
//         console.log("this is not");
//     }
//     }
// }
// }
// primeNumber(10,20)



