class School {
    // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

    private _areas: Area[];
    private _lecturers: Lecturer[]; // Name, surname, position, company, experience, courses, contacts

    constructor(areas: Area[], lecturers: Lecturer[]) {
        this._areas = areas;
        this._lecturers = lecturers;
    }

    get areas(): Area[] {
        return this._areas;
    }

    get lecturers(): Lecturer[] {
        return this._lecturers;
    }

    public addArea(area: Area): number {
        return this._areas.push(area);
    }

    public removeArea(area: Area): number {
        let newAreas: Area[] = [];
        for (var i = 0; i < this._areas.length; i++) {
            if (this._areas[i].name !== area.name) {
                newAreas.push(newAreas[i]);
            }
        }

        this._areas = newAreas;
        return this._areas.length;
    }
}

class Lecturer {
    private _name: string;
    private _surname: string;
    private _position: string;
    private _company: string;
    private _experience: string;
    private _courses: string[];
    private _contacts: string[];

    constructor(name: string, surname: string, position: string, company: string, experience: string, courses: string[], contacts: string[]) {
        this._name = name;
        this._surname = surname;
        this._position = position;
        this._company = company;
        this._experience = experience;
        this._courses = courses;
        this._contacts = contacts;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get surname(): string {
        return this._surname;
    }

    public set surname(surname: string) {
        this._surname = surname;
    }

    public get position(): string {
        return this._position;
    }

    public set position(position: string) {
        this._position = position;
    }

    public get company(): string {
        return this._company;
    }

    public set company(company: string) {
        this._company = company;
    }

    public get experience(): string {
        return this._experience;
    }

    public set experience(experience: string) {
        this._experience = experience;
    }

    public get courses(): string[] {
        return this._courses;
    }

    public set courses(courses: string[]) {
        this._courses = courses;
    }

    public get contacts(): string[] {
        return this._contacts;
    }

    public set contacts(contacts: string[]) {
        this._contacts = contacts;
    }
}

class Area {
    // implement getters for fields and 'add/remove level' methods
    private _levels: Level[];
    private _name: string;

    constructor(levels: Level[], name: string) {
        this._levels = levels;
        this._name = name;
    }

    public get levels(): Level[] {
        return this._levels;
    }

    public set levels(levels: Level[]) {
        this._levels = levels;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public addLevel(level: Level): number {
        return this._levels.push(level);
    }

    public removeLevel(level: Level): number {
        let newLevels: Level[] = [];
        for (var i = 0; i < this._levels.length; i++) {
            if (this._levels[i].name !== level.name) {
                newLevels.push(this._levels[i]);
            }
        }

        this._levels = newLevels;
        return this._levels.length;
    }
}

class Level {
    // implement getters for fields and 'add/remove group' methods

    private _groups: Group[];
    private _name: string;
    private _description: string;

    constructor(groups: Group[], name: string, description: string) {
        this._groups = groups;
        this._name = name;
        this._description = description;
    }

    public get groups(): Group[] {
        return this._groups;
    }

    public set groups(groups: Group[]) {
        this._groups = groups;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get description(): string {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public addGroup(group: Group) {
        this._groups.push(group);
    }

    public removeGroup(group: Group) {
        let newGroups: Group[] = [];
        for (var i = 0; i < this._groups.length; i++) {
            if (this._groups[i].directionName !== group.directionName && this._groups[i].levelName !== group.levelName) {
                newGroups.push(this._groups[i]);
            }
        }

        this._groups = newGroups;
        return this._groups.length;
    }
}

class Group {
    // implement getters for fields and 'add/remove student' and 'set status' methods

    private _area: Area;
    private _status: string;
    private _students: Student[]; // Modify the array so that it has a valid toSorted method*

    private _directionName: string;
    private _levelName: string;

    constructor(directionName: string, levelName: string, area: Area, status: string, students: Student[]) {
        this._directionName = directionName;
        this._levelName = levelName;
        this._area = area;
        this._status = status;
        this._students = students;
    }

    public showPerformance(): Student[] {
        const sortedStudents = this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }

    public get directionName(): string {
        return this._directionName;
    }

    public set directionName(directionName: string) {
        this._directionName = directionName;
    }

    public get area(): Area {
        return this._area;
    }

    public set area(area: Area) {
        this._area = area;
    }

    public get status(): string {
        return this._status;
    }

    public set status(status: string) {
        this._status = status;
    }

    public get levelName(): string {
        return this._levelName;
    }

    public set levelName(levelName: string) {
        this._levelName = levelName;
    }

    public get students(): Student[] {
        return this._students;
    }

    public set students(students: Student[]) {
        this._students = students;
    }

    public addStudent(student: Student) {
        this._students.push(student);
    }

    public removeStudent(student: Student) {
        let newStudents: Student[] = [];
        for (var i = 0; i < this._students.length; i++) {
            if (this._students[i].fullName !== student.fullName && this._students[i].age !== student.age) {
                newStudents.push(this._students[i]);
            }
        }

        this._students = newStudents;
        return this._students.length;
    }
}

class Visit {
    private _lesson: string;
    private _isPresent: boolean;

    constructor(lesson: string, isPresent: boolean) {
        this._lesson = lesson;
        this._isPresent = isPresent;
    }

    public get lesson(): string {
        return this._lesson;
    }

    public set lesson(lesson: string) {
        this._lesson = lesson;
    }

    public get isPresent(): boolean {
        return this._isPresent;
    }

    public set isPresent(isPresent: boolean) {
        this._isPresent = isPresent;
    }
}

class Grade {
    private _workName: string;
    private _mark: number;

    constructor(workName: string, mark: number) {
        this._workName = workName;
        this._mark = mark;
    }

    public get workName(): string {
        return this._workName;
    }

    public set workName(workName: string) {
        this._workName = workName;
    }

    public get mark(): number {
        return this._mark;
    }

    public set mark(mark: number) {
        this._mark = mark;
    }
}

class Student {
    // implement 'set grade' and 'set visit' methods

    private _firstName: string;
    private _lastName: string;
    private _birthYear: number;
    private _grades: Grade[]; // workName: mark
    private _visits: Visit[]; // lesson: present

    constructor(firstName: string, lastName: string, birthYear: number, grades: Grade[], visits: Visit[]) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
        this._grades = grades;
        this._visits = visits;
    }

    public get fullName() {
        return `${this._lastName} ${this._firstName}`;
    }

    public set fullName(value: string) {
        [this._lastName, this._firstName] = value.split(' ');
    }

    public get age() {
        return new Date().getFullYear() - this._birthYear;
    }

    public set grades(grades: Grade[]) {
        this._grades = grades;
    }

    public set visits(visits: Visit[]) {
        this._visits = visits;
    }

    public getPerformanceRating(): number {
        const gradeValues = Object.values(this._grades);

        if (!gradeValues.length) return 0;

        const averageGrade = gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100;

        return (averageGrade + attendancePercentage) / 2;
    }
}