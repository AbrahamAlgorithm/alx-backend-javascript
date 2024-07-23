const fs = require('fs');
const http = require('http');
const port = 1245;
const host = 'localhost';
const app = http.createServer();
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

const ALL_ROUTES = [
  {
    route: '/',
    handler: (_, res) => {
      const text = 'Hello Holberton School!';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', text.length);
      res.statusCode = 200;
      res.write(Buffer.from(text));
    }
  },
  {
    route: '/students',
    handler: (_, res) => {
      const Restext = ['This is the list of our students'];
      countStudents(DB)
        .then((suc) => {
          Restext.push(suc);
          const text = Restext.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', text.length);
          res.statusCode = 200;
          res.write(Buffer.from(text));
        })
        .catch(err => {
          Restext.push(err instanceof Error ? err.message : err.toString());
          const text = Restext.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', text.length);
          res.statusCode = 200;
          res.write(Buffer.from(text));
        });
    }
  }
];
app.on('request', (request, response) => {
  for (const req of ALL_ROUTES) {
    if (req.route === request.url) {
      req.handler(request, response);
      break;
    }
  }
});

app.listen(port, host, () => {
  process.stdout.write(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;