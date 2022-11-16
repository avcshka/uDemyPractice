const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(students) {
    let sortedStudents = students.sort();

    let team1 = [];
    let team2 = [];
    let team3 = [];
    let remain = [];

    sortedStudents.forEach(() => {
        team1 = sortedStudents.slice(0, 3);
        team2 = sortedStudents.slice(3, 6);
        team3 = sortedStudents.slice(6, 9);
        remain = sortedStudents.slice(9);
    });

    let result = [];
    result.push(team1);
    result.push(team2);
    result.push(team3);

    result.push(`Оставшиеся студенты: ${remain.length === 0 ? '-' : remain.join(', ')} `)

    console.log(result);
}

sortStudentsByGroups(students);