console.log(" المسألة الاولي ✅");

// Create a function to calculate Average to a group of numbers (at least 10 numbers)
// اعمل فانكشن تحسب المتوسط الحسابى لمجموعه من الارقام (لا يقلوا عن
// ١٠
// ارقام)

function countingNumbers(numbers) {
    if (numbers.length < 10) {
        console.log("put at least 10 numbers");
    }else{
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        //another solution with (reduce) (بستخدمها عند تجميع array)
        // let sum = numbers.reduce((acc, curr) => acc + curr);  
        
        return sum / numbers.length;
    }
}



let numbers = [9, 10, 20, 50, 55, 40, 60, 88, 66, 44, 22, 87, 321, 45, 7];
let average = countingNumbers(numbers);

console.log(`the average is: ${average}`);
console.log("####################################")

console.log(" المسألة الثانية ✅");

// Write a function that takes the base and height of a triangle and return its area
// اعمل فانكشن تاخد ارتفاع وقاعده المثلث وترجع مساحه المثلث

function calculateTriangleArea(base, height) {
    // حساب مساحة المثلث
    let area = (1 / 2) * base * height;
    return area;
}

// مثال
let base = 10;
let height = 5;
let triangleArea = calculateTriangleArea(base, height);
console.log(`triangleArea is: ${triangleArea}`);



console.log("####################################");

console.log(" المسألة الثالثة ✅");

// Create a function that takes the age in years and returns the age in days and print it on console
// اعمل
// فانكشن تاخد العمر و ترجعه بالايام واطبعها فى الكونسول

function ageInDays(theAge) {
    let ageInDays = theAge * 365;
    return ageInDays;
}
// مثال
let theAge = 10;
console.log(`theAge in days is: ${ageInDays(theAge)}`);



console.log("####################################");

console.log(" المسألة الرابعة ✅");


// Create a function takes two numbers and return
// thier sum Create a function takes two numbers and return thier sum
// اعمل فانكشن تاخد رقمين وترجع مجموعهم


function sumTwoNums (a, b){
    return a + b
}
// مثال
let a = 40;
let b = 20;
console.log(`the sum is: ${sumTwoNums(a, b)}`);


console.log("####################################");
console.log("المسألة الخامسة ✅");


// Create a function that takes an array containing only numbers and return the first element
// اعمل فانكشن تأخذ اكتر من عشر اسامي داخلarray ثم تعرض اول عنصر فقط

var theNames = ["ahmed", "mohamed", "ebrahim","fatma", "nada", "sameh", "hosam", "khaled", "alaa", "nancy"];
console.log(theNames[0]);



console.log("####################################");
console.log("المسألة السادسه ✅");

// Create a function show your name in HTML document
// اعمل فانكشن تعرض اسمك كامل في ال HTML ✅

document.getElementById("my name").innerHTML = "khaled ahmed mohamed";
document.write("ahmed mohamed ebrahim");

console.log("####################################");
console.log("المسألة السابعه ✅");

// Given four numbers, return true if numbers is more than 350. Otherwise return false. the sum of both

// اعمل فانكشن بتاخد اربع ارقام وترجع مجموعهم لو اكتر من ٣٥٠ أظهر true لو أقل من ٣٥٠ أظهر false والعرض يكون علي ال html document



// function calc (a, b, c, d){
//     if (a + b + c + d > 350){
//         return true;
//         }else{
//             return false;
//             }
// }


//حل اخر
function calc(...numbers){
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
        }
        if (result > 350){
            return true;
            }else{
                return false;
                };
}

//مثال
document.getElementById("result1").innerHTML =(calc(100, 200, 50, 60));
document.getElementById("result2").innerHTML =(calc(10, 20, 50, 60));
