const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter the first number:",function(num1){
    rl.question("Enter opertaor:",function(operator){
        rl.question("Enter the second number:",function(num2){
            num1=Number(num1);
            num2=Number(num2);
            if(operator=="+"){
                console.log(num1+num2);
            }
            else if(operator=="-"){
                console.log(num1-num2);
            }
            else if(operator=="*"){
                console.log(num1*num2);
            }
            else if(operator=="/"){
                console.log(num1/num2);
            }
            else{
                console.log("Invalid operator");
            }
            rl.close();
        });
    });
});