const express = require('express');
const app = express();
const port = 1245;
const fs = require('fs');
const DB = process.argv.length > 2 ? process.argv[2] : '';
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
      const report = [];

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
      report.push(`Number of students: ${count}`);

      for (const [field, group] of Object.entries(students)) {
        report.push([`Number of students in ${field}: ${group.length}`,
          'List:', group.map((student) => student.firstname).join(', ')].join(" "));
      }
      resolve(report.join('\n'));
    }
  });
});
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];
  countStudents(DB)
    .then((suc) => {
      responseParts.push(suc);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch(err => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});

module.exports = app;