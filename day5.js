//Array and objects
let students=[
    {
        name:"Nithya sri",
        age:19,
        department:"CSE",
        cpga:8.4
    },
    {
        name:"moni",
        age:20,
        department:"ECE",
        cpga:8.6
    },
    {
        name:"sarah",
        age:21,
        department:"IT",
        cpga:8.2
    }
];
for(let i=0;i<students.length;i++){
    console.log("student",i+1);
    console.log("Name: "+students[i].name);
    console.log("Age: "+students[i].age);
    console.log("Department: "+students[i].department);
    console.log("CPGA: "+students[i].cpga);
}