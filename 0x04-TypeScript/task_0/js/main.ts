interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student_one : Student = {
  firstName: 'ahmed',
  lastName: 'almakki',
  age: 28,
  location: 'Sudan',
};

const student_two: Student = {
  firstName: 'jm',
  lastName: 'tr',
  age: 20,
  location: 'Fr',
};
let studentsList: Student[] = [student_one, student_two]

const student_table = document.createElement('table');
const student_body = document.createElement('tbody');

studentList.forEach((objectList) => {
  const tableName = document.createElement('tableName');
  const tableRow = document.createElement('tableRow');
  const tableLocation = document.createElement('tableLocation');

  tableName.textContent = objectList.firstName;
  tableLocation.textContent = objectList.location;
  tableRow.appendChild(tableName);
  tableRow.appendChild(tableLocation);
  student_body.appendChild(tableRow);
})

student_table.appendChild(student_body);
document.body.appendChild(student_table);
