//1
const School = {
    name:"Nazarbaev school",
    phoneNumber:"+77053498478487",
    students:[
        {studentName: "Abdurrahman", top: "A", progress:100,  lessons:2  },
        {studentName: "Maral", top: "Ә", progress:100,  lessons:5  },
        {studentName: "Adam", top: "B", progress:50,  lessons:4  },
        {studentName: "Bakzhan", top: "V", progress:25,  lessons:2  },
        {studentName: "Mustava", top: "m", progress:2,  lessons:4  },
    ],
}


//2
function changeSchoolName() {
    const newName = prompt("Жана оқу отралығн егізініз:");
    if (newName) {
        school.name = newName;
        alert('оқу орталығынын жана атауы:${school.name}');
    }else{
        alert("Атау өзгертілмеді.");
    }
}





//3
function changePhoneNumber() {
    const newPhoneNumber = prompt("жана телефон нөмерін енгізініз:");
    if (newPhoneNumber) {
        school.phoneNumber = newPhoneNumber;
        alert('Жаңа телефон нөмері: $(school.phoneNumber)');
    }else{
        alert("Телефон нөмері өзгертілмеді.");
    }
}





//4
function listStudentNames() {
    const names = school.students.map((student) => student.studentName).join("\n");
    alert('Студентердін атауы:\n${names}');
}





