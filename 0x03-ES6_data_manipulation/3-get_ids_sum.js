/* eslint-disable*/
export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((item) => item.location === city);
}
