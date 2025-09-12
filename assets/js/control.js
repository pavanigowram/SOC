//
let x =10;
let y =20;
console.log(x+y);
console.log(x%y);
// Divisble by 2
let num=7;
if (num%2==0){
    console.log("Divisible by 2");
}else{
    console.log("Not Divisible By 2");
    }
    // palindrome
   function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            console.log( false);
        }
        j--;
    }
     console.log(true);
}
isPalindrome("madam");

// sum of a and b
var a =10;
var b =20;
var sum =a+b;
alert("The sum of a and b is "+sum);
console.log(a+b);
