console.log("Number series from 1 to 10");
for(let i=1;i<=10;i++){
    console.log(i);
}
console.log("\n Star Pattern");
for(let i=1;i<=5;i++){
    console.log("*".repeat(i));
}
console.log("\n Number Pattern");
for(let i=1;i<=5;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str+=j+" ";
    }
    console.log(str);
}