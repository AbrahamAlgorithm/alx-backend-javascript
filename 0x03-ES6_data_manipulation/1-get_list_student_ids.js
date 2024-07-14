/* eslint-disable linebreak-style */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((idx) => idx.id);
}
