export interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience? :number
    location: string
}
export interface Director extends Teacher {
  numberOfReport: number,
}
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export interface StdClassConstructor {
  new (firstName: string, lastName: string): StdClass;
}

export interface StdClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StdClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}
