var Levels;
(function (Levels) {
    Levels["TRAINEE"] = "TRAINEE";
    Levels["JUNIOR"] = "JUNIOR";
    Levels["MIDDLE"] = "MIDDLE";
    Levels["SENIOR"] = "SENIOR";
})(Levels || (Levels = {}));
class School {
    constructor() {
        this._areas = [];
        this._lecturers = [];
    }
    get areas() {
        return this._areas;
    }
    get lecturers() {
        return this._lecturers;
    }
    addArea(area) {
        this._areas.push(area);
    }
    removeArea(selectedArea) {
        this._areas = this._areas.filter(area => area !== selectedArea);
    }
    addLecturer(lecturer) {
        this._lecturers.push(lecturer);
    }
    removeLecturer(selectedLecturer) {
        this._lecturers = this._lecturers.filter(lecturer => lecturer !== selectedLecturer);
    }
}
class Area {
    constructor(name) {
        this._levels = [];
        this._name = name;
    }
    get levels() {
        return this._levels;
    }
    get name() {
        return this._name;
    }
    addLevel(level) {
        this._levels.push(level);
    }
    removeLevel(item) {
        this._levels = this._levels.filter(level => level.name !== item.name);
    }
}
class Level {
    constructor(name, description) {
        this._groups = [];
        this._name = name;
        this._description = description;
    }
    get groups() {
        return this._groups;
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    addGroup(group) {
        this._groups.push(group);
    }
    removeGroup(selectedGroup) {
        this._groups = this._groups.filter(group => group !== selectedGroup);
    }
}
class Group {
    constructor(area, status, students, directionName, levelName) {
        this._students = [];
        this._area = area;
        this._status = status;
        this._students = students;
        this._directionName = directionName;
        this._levelName = levelName;
    }
    showPerformance() {
        return this._students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    }
    addStudent(student) {
        this._students.push(student);
    }
    removeStudent(selectedStudent) {
        this._students = this._students.filter(student => student !== selectedStudent);
    }
}
class Student {
    constructor(firstName, lastName, birthYear) {
        this._grades = {};
        this._visits = {};
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    get fullName() {
        return `${this._lastName} ${this._firstName}`;
    }
    set fullName(value) {
        [this._lastName, this._firstName] = value.split(' ');
    }
    get age() {
        return new Date().getFullYear() - this._birthYear;
    }
    getPerformanceRating() {
        const gradeValues = Object.values(this._grades);
        if (!gradeValues.length)
            return 0;
        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage = (Object.values(this._visits).filter((present) => present).length / Object.keys(this._visits).length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    }
    set grade(object) {
        this._grades[object.workName] = object.mark;
    }
    set visit(object) {
        this._visits[object.lesson] = object.present;
    }
}
// Создаем экземпляр школы
const mySchool = new School();
// Добавляем области в школу
mySchool.addArea('Math');
mySchool.addArea('Science');
// Создаем преподавателей
const lecturer1 = {
    id: '1',
    name: 'John',
    surname: 'Doe',
    position: 'Professor',
    company: 'University',
    experience: 5,
    courses: ['Math 101', 'Physics 101'],
    contacts: ['john@example.com'],
};
const lecturer2 = {
    id: '2',
    name: 'Jane',
    surname: 'Smith',
    position: 'Instructor',
    company: 'School',
    experience: 3,
    courses: ['Chemistry 101', 'Biology 101'],
    contacts: ['jane@example.com'],
};
// Добавляем преподавателей 
mySchool.addLecturer(lecturer1);
mySchool.addLecturer(lecturer2);
// Создаем уровни
const level1 = new Level(Levels.TRAINEE, 'Beginner level');
const level2 = new Level(Levels.JUNIOR, 'Intermediate level');
// Создаем область
const mathArea = new Area('Mathematics');
// Добавляем уровни в область
mathArea.addLevel(level1);
mathArea.addLevel(level2);
// Создаем группу
const students = [
    new Student('Alice', 'Johnson', 1995),
    new Student('Bob', 'Smith', 1990),
];
const mathGroup = new Group(mathArea, 'Active', students, 'Math Group 1', Levels.TRAINEE);
// Добавляем студентов в группу
const newStudent = new Student('Eve', 'Brown', 2000);
mathGroup.addStudent(newStudent);
// Показываем студентов в группе
console.log('Students in Math Group:');
console.log(mathGroup.showPerformance());
// Удаляем студента из группы
mathGroup.removeStudent(students[0]);
// Показываем студентов после удаления
console.log('Students in Math Group after removing one student:');
console.log(mathGroup.showPerformance());
