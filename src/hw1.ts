class School {
  directions: Direction[] = [];

  addDirection(direction: Direction) {
    this.directions.push(direction);
  }
}

class Direction {
  levels: Level[] = [];

  get name(): string {
    return this._name;
  }

  constructor(private _name: string) {}

  addLevel(level: Level): void {
    this.levels.push(level);
  }
}

class Level {
  groups: Group[] = [];

  constructor(private _name: string, private _program: string) {}

  get name(): string {
    return this._name;
  }

  get program(): string {
    return this._program;
  }

  addGroup(group: Group): void {
    this.groups.push(group);
  }
}

class Group {
  _students: Student[] = [];
  get students(): Student[] {
    return this._students;
  }

  constructor(public directionName: string, public levelName: string) {}

  addStudent(student: Student): void {
    this._students.push(student);
  }

  showPerformance(): Student[] {
    const sortedStudents = this.students
      .slice()
      .sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    return sortedStudents;
  }
}

class Student {
  grades: { [subject: string]: number } = {};
  attendance: boolean[] = [];

  constructor(
    public firstName: string,
    public lastName: string,
    public birthYear: number,
  ) {}

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: number): void {
    this.grades[subject] = grade;
  }

  markAttendance(present: boolean): void {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage =
      (this.attendance.filter((present) => present).length /
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
