function add(num1,num2 = 0){
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    // num2 = num2 || 7;
    return num1 + num2;
}
const total = add(23,2);
console.log(total);