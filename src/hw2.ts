enum Levels {
    TRAINEE = 'TRAINEE',
    JUNIOR = 'JUNIOR',
    MIDDLE = 'MIDDLE',
    SENIOR = 'SENIOR',
  }
  
  interface Lecturer {
    id: string;
    name: string;
    surname: string;
    position: string;
    company: string;
    experience: number;
    courses: string[];
    contacts: string[];
  }
  
  class School {
    private _areas: string[] = [];
    private _lecturers: Lecturer[] = [];
  
    get areas(): string[] {
      return this._areas;
    }
  
    get lecturers(): Lecturer[] {
      return this._lecturers;
    }
  
    addArea(area: string): void {
      this._areas.push(area);
    }
  
    removeArea(selectedArea: string): void {
      this._areas = this._areas.filter(area => area !== selectedArea);
    }
  
    addLecturer(lecturer: Lecturer): void {
      this._lecturers.push(lecturer);
    }
  
    removeLecturer(selectedLecturer: Lecturer): void {
      this._lecturers = this._lecturers.filter(lecturer => lecturer !== selectedLecturer);
    }
  }
  
  class Area {
    private _levels: Level[] = [];
    private _name: string;
  
    constructor(name: string) {
      this._name = name;
    }
  
    get levels(): Level[] {
      return this._levels;
    }
  
    get name(): string {
      return this._name;
    }
  
    addLevel(level: Level): void {
      this._levels.push(level);
    }
  
    removeLevel(item: Level): void {
      this._levels = this._levels.filter(level => level.name !== item.name);
    }
  }
  
  class Level {
    private _groups: Group[] = [];
    private _name: Levels;
    private _description: string;
  
    constructor(name: Levels, description: string) {
      this._name = name;
      this._description = description;
    }
  
    get groups(): Group[] {
      return this._groups;
    }
  
    get name(): Levels {
      return this._name;
    }
  
    get description(): string {
      return this._description;
    }
  
    addGroup(group: Group): void {
      this._groups.push(group);
    }
  
    removeGroup(selectedGroup: Group): void {
      this._groups = this._groups.filter(group => group !== selectedGroup);
    }
  }
  
  class Group {
    private _area: Area;
    private _status: string;
    private _students: Student[] = [];
    private _directionName: string;
    private _levelName: string;
  
    constructor(area: Area, status: string, students: Student[], directionName: string, levelName: string) {
      this._area = area;
      this._status = status;
      this._students = students;
      this._directionName = directionName;
      this._levelName = levelName;
    }
  
    showPerformance(): Student[] {
      return this._students.sort((a: Student, b: Student) => b.getPerformanceRating() - a.getPerformanceRating());
    }
  
    addStudent(student: Student): void {
      this._students.push(student);
    }
  
    removeStudent(selectedStudent: Student): void {
      this._students = this._students.filter(student => student !== selectedStudent);
    }
  }
  
  class Student {
    private _firstName: string;
    private _lastName: string;
    private _birthYear: number;
    private _grades: { [workName: string]: number } = {};
    private _visits: { [lesson: string]: boolean } = {};
  
    constructor(firstName: string, lastName: string, birthYear: number) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._birthYear = birthYear;
    }
  
    get fullName(): string {
      return `${this._lastName} ${this._firstName}`;
    }
  
    set fullName(value: string) {
      [this._lastName, this._firstName] = value.split(' ');
    }
  
    get age(): number {
      return new Date().getFullYear() - this._birthYear;
    }
  
    getPerformanceRating(): number {
      const gradeValues: number[] = Object.values(this._grades);
  
      if (!gradeValues.length) return 0;
  
      const averageGrade: number = gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
      const attendancePercentage: number = (Object.values(this._visits).filter((present: boolean) => present).length / Object.keys(this._visits).length) * 100;
  
      return (averageGrade + attendancePercentage) / 2;
    }
  
    set grade(object: { workName: string; mark: number }) {
      this._grades[object.workName] = object.mark;
    }
  
    set visit(object: { lesson: string; present: boolean }) {
      this._visits[object.lesson] = object.present;
    }
  }
  
  