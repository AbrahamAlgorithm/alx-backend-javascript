/* eslint-disable*/
export default function getStudentIdsSum(exac) {
  const arr = Array.from(exac);
  return arr.reduce((acc, student) => acc + student.id, 0 );
}
