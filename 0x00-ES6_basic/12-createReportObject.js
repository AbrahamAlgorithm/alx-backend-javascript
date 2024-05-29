// 12-createReportObject.js
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: function(employees) {
      return Object.keys(employees).length;
    }
  };
}

