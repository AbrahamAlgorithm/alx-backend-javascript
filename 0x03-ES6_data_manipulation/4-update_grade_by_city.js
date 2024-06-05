//combine
export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter(student => student.location === city);
  return studentsInCity.map(student => {
    // Find the new grade for the current student
    const gradeObj = newGrades.find(grade => grade.studentId === student.id);
    // Return the student object with the updated grade
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });
}
