const fs = require('fs');

const countStudents = (a) => {
  if (!fs.existsSync(a) || !fs.statSync(a).isFile()) {
    throw new Error('Cannot load the database');
  }
  const file = fs.readFileSync(a, 'utf-8').toString('utf-8').trim().split('\n');
  const students = {};
  const info = file[0].split(',');
  const studentProps = info.slice(0, info.length - 1);

  for (const line of file.splice(1)) {
    const oneStudent = line.split(',');
    const studentVal = oneStudent.slice(0, oneStudent.length - 1);
    const field = oneStudent[oneStudent.length - 1];
    if (!Object.keys(students).includes(field)) {
      students[field] = [];
    }
    const studentRecord = studentProps.map((nm, ind) => [nm, studentVal[ind]]);
    students[field].push(Object.fromEntries(studentRecord));
  }
  const numStudents = Object.values(students)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${numStudents}`);

  for (const [field, group] of Object.entries(students)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};
module.exports = countStudents;