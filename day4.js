//Functions 
function sum(a,b){
    return a+b;
}
function factorial(n){
    if(n==0 ||n==1){
        return 1;
    }
    return n*factorial(n-1);
}
console.log("Sum of 5 and 10 is "+sum(5,10));
console.log("Factorial of 5 is "+factorial(5));