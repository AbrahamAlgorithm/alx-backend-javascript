const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const file = data.toString('utf-8').trim().split('\n');
      const students = {};
      const headings = file[0].split(',');
      const studentsProps = headings.slice(0, headings.length - 1);

      for (const line of file.slice(1)) {
        const student = line.split(',');
        const studentProps = student.slice(0, student.length - 1);
        const field = student[student.length - 1];
        if (!Object.keys(students).includes(field)) {
          students[field] = [];
        }
        const oneRecord = studentsProps.map((prop, idx) => [prop, studentProps[idx]]);
        students[field].push(Object.fromEntries(oneRecord));
      }
      const count = Object.values(students).reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${count}`);

      for (const [field, group] of Object.entries(students)) {
        const sName = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${sName}`);
      }
      resolve(true);
    }
  });
});
module.exports = countStudents;