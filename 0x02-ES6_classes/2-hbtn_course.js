export default class HolbertonCourse {
  constructor(name, length, students) {
    if (name.constructor === String) {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
    if (length.constructor === Number) {
      this._length = length;
    } else {
      throw new Error('length must be a number');
    }
    if (students.constructor === Array) {
      let x = true;
      for (const i in students) {
        if (students[i].constructor !== String) {
          x = false;
        }
      }
      if (x) {
        this._students = students;
      } else {
        throw new Error('students must be a array');
      }
    } else {
      throw new Error('students must be a array');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(Nname) {
    this._name = Nname;
  }

  set length(Nlength) {
    this._length = Nlength;
  }

  set students(Nstudnt) {
    this._students = Nstudnt;
  }
}
