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
    constructor(_name) {
        this._name = _name;
        this.levels = [];
    }
    addLevel(level) {
        this.levels.push(level);
    }
}
class Level {
    constructor(_name, _program) {
        this._name = _name;
        this._program = _program;
        this.groups = [];
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
        this.directionName = directionName;
        this.levelName = levelName;
        this._students = [];
    }
    addStudent(student) {
        this._students.push(student);
    }
    showPerformance() {
        const sortedStudents = this.students
            .slice()
            .sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }
}
class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = {};
        this.attendance = [];
    }
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName(value) {
        [this.lastName, this.firstName] = value.split(' ');
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
// Создание школы
const school = new School();
// Добавление направлений
const mathDirection = new Direction('Mathematics');
const physicsDirection = new Direction('Physics');
school.addDirection(mathDirection);
school.addDirection(physicsDirection);
// Добавление уровней
const level1 = new Level('Level 1', 'Basic');
const level2 = new Level('Level 2', 'Intermediate');
mathDirection.addLevel(level1);
mathDirection.addLevel(level2);
// Добавление групп
const mathGroupA = new Group('Mathematics', 'Level 1');
const mathGroupB = new Group('Mathematics', 'Level 2');
level1.addGroup(mathGroupA);
level2.addGroup(mathGroupB);
// Добавление студентов
const student1 = new Student('John', 'Doe', 2005);
const student2 = new Student('Alice', 'Smith', 2006);
mathGroupA.addStudent(student1);
mathGroupA.addStudent(student2);
// Установка оценок и посещаемости для студентов
student1.setGrade('Math', 95);
student2.setGrade('Math', 88);
student1.markAttendance(true);
student2.markAttendance(false);
// Получение рейтинга успеваемости для группы
const mathGroupARating = mathGroupA.showPerformance();
console.log('Performance Rating for Math Group A:', mathGroupARating);
// Получение информации о студентах
console.log('Student 1 Full Name:', student1.fullName);
console.log('Student 2 Age:', student2.age);
