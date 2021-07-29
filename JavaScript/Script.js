let num1 = +prompt("Number one")
let num2 = +prompt("Number two")
let method = prompt('+','-','*','/')

function a(a, b, c){
        if(method == '+'){
            let result = num1 + num2
            console.log(result);
        } else if(method == '-'){
            let result = num1 - num2
            console.log(result);
        } else if(method == '*'){
            let result = num1 * num2
            console.log(result);
        } else if(method == '/'){
            let result = num1 / num2
            console.log(result);
        } else {
            console.log('undefined');
        }
}
a(num1, num2, method)


//---------------------------------------------------------\\

// сложите сначало элементы каждого массива 
// а дальше сложите все массивы (ответ 459)
let array1 = [1,2]

let array2 = [10,42]

let array3 = [141,263]

array1 = array1[0] + array1[1]
array2 = array2[0] + array2[1]
array3 = array3[0] + array3[1]
console.log(array1 + array2 + array3);

