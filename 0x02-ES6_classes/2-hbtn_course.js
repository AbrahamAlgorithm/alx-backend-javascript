/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a String');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a Number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (typeof newStudents !== 'object') {
      throw new Error('Students must be an Array of Strings');
    } else {
      for (let i = 0; i < newStudents.length; i++) {
        if (typeof newStudents[i] !== 'string') {
          throw new TypeError('Student must be a String');
        }
      }
      this._students = newStudents;
    }
  }
}
