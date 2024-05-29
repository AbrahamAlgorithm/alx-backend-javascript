// 100-createIteratorObject.js
export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const departments = Object.keys(allEmployees);
  let currentDeptIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next: function() {
      const currentDept = departments[currentDeptIndex];
      const employees = allEmployees[currentDept];

      if (currentEmployeeIndex >= employees.length) {
        currentDeptIndex++;
        currentEmployeeIndex = 0;
      }

      if (currentDeptIndex >= departments.length) {
        return { done: true };
      }

      const employee = employees[currentEmployeeIndex++];
      return { value: employee, done: false };
    },
    [Symbol.iterator]: function() {
      return this;
    }
  };
}

