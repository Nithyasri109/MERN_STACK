const express = require("express");

const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Nithya Sri"
    }
];

// GET
app.get("/students", (req, res) => {
    res.json(students);
});

// POST
app.post("/students", (req, res) => {

    const student = {
        id: students.length + 1,
        name: req.body.name
    };

    students.push(student);

    res.json({
        message: "Student Added",
        student
    });
});

// PUT
app.put("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if(student) {
        student.name = req.body.name;

        res.json({
            message: "Student Updated",
            student
        });
    } else {
        res.status(404).json({
            message: "Student Not Found"
        });
    }
});

// DELETE
app.delete("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    students = students.filter(
        s => s.id !== id
    );

    res.json({
        message: "Student Deleted"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});