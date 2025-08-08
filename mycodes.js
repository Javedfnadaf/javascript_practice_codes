let number =[10,25,85,85,25,97,54];
let largest = number[0];
for(let i=1; i < number.length; i++){
   if(number[i] > largest){
      largest = number[i]
   }
}
console.log(`the largest number is ${largest}`);