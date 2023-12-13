class School {
    constructor() {
        this.directions = [];
    }
    addDirection(direction) {
        this.directions.push(direction);
    }
}
class Direction {
    get name() {
        return this._name;
    }
    constructor(name) {
        this.levels = [];
        this._name = name;
    }
    addLevel(level) {
        this.levels.push(level);
    }
}
class Level {
    constructor(name, program) {
        this.groups = [];
        this._name = name;
        this._program = program;
    }
    get name() {
        return this._name;
    }
    get program() {
        return this._program;
    }
    addGroup(group) {
        this.groups.push(group);
    }
}
class Group {
    get students() {
        return this._students;
    }
    constructor(directionName, levelName) {
        this._students = [];
        this.directionName = directionName;
        this.levelName = levelName;
    }
    addStudent(student) {
        this._students.push(student);
    }
    showPerformance() {
        const sortedStudents = this.students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }
}
class Student {
    constructor(firstName, lastName, birthYear) {
        this.grades = {};
        this.attendance = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName(value) {
        [this.lastName, this.firstName] = value.split(" ");
    }
    get age() {
        return new Date().getFullYear() - this.birthYear;
    }
    setGrade(subject, grade) {
        this.grades[subject] = grade;
    }
    markAttendance(present) {
        this.attendance.push(present);
    }
    getPerformanceRating() {
        const gradeValues = Object.values(this.grades);
        if (gradeValues.length === 0)
            return 0;
        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage = (this.attendance.filter((present) => present).length /
            this.attendance.length) *
            100;
        return (averageGrade + attendancePercentage) / 2;
    }
}
// Создаем студентов
const student1 = new Student("John", "Doe", 1995);
const student2 = new Student("Alice", "Smith", 1998);
// Добавляем оценки и посещаемость студентам
student1.setGrade("Math", 90);
student1.setGrade("History", 85);
student1.markAttendance(true);
student1.markAttendance(false);
student2.setGrade("Math", 95);
student2.setGrade("History", 88);
student2.markAttendance(true);
student2.markAttendance(true);
// Создаем группы
const group1 = new Group("Mathematics", "Advanced");
const group2 = new Group("History", "Intermediate");
// Добавляем студентов в группы
group1.addStudent(student1);
group1.addStudent(student2);
group2.addStudent(student2);
// Создаем уровни
const level1 = new Level("Advanced", "Intensive");
const level2 = new Level("Intermediate", "Regular");
// Добавляем группы в уровни
level1.addGroup(group1);
level2.addGroup(group2);
// Создаем направления
const direction1 = new Direction("Science");
const direction2 = new Direction("Humanities");
// Добавляем уровни в направления
direction1.addLevel(level1);
direction2.addLevel(level2);
// Создаем школу и добавляем направления
const school = new School();
school.addDirection(direction1);
school.addDirection(direction2);
// Выводим информацию о студентах и их успеваемости в каждой группе
school.directions.forEach((direction) => {
    direction.levels.forEach((level) => {
        level.groups.forEach((group) => {
            console.log(`Direction: ${direction.name}`);
            console.log(`Level: ${level.name}, Program: ${level.program}`);
            console.log(`Group: ${group.directionName} ${group.levelName}`);
            const sortedStudents = group.showPerformance();
            console.log("Students Performance:");
            sortedStudents.forEach((student, index) => {
                console.log(`${index + 1}. ${student.fullName}, Age: ${student.age}, Performance Rating: ${student.getPerformanceRating()}`);
            });
            console.log("\n");
        });
    });
});
