let sumArray = function(numbers:number[]){
    let sum:number = 0
    for(let i=0;i<numbers.length;i++){
        if(isNaN(numbers[i])){
            continue;
        }

        sum +=Number(numbers[i])
    }
    return sum; //Siempre retornar afuera
}
let numbers:number[] = [2,3,4,5]
console.log(sumArray(numbers))