// Implement a function getHighestScoringStudent(students)
// that takes an array of students and returns the highest scoring student.

const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 40 },
  { name: "Charlie", grade: 70 },
];
const getHighestScoringStudent = (students) => {
  let highestScoreStudent = students[0];
  for (const student of students.slice(1)) {
    if (student.grade >= highestScoreStudent.grade) {
      highestScoreStudent = student;
    }
  }
  return highestScoreStudent;
};

const getAverageScore = (students) => {
  let total = 0;
  for (const student of students) {
    total = total + student.grade;
  }
  return Math.ceil(total / students.length);
};

const getPassingStudents = (students) => {
  const passingStudent = students
    .filter((student) => student.grade >= 50)
    .map((student) => student.name)
    .sort();
  return passingStudent;
};

module.exports = {
  getHighestScoringStudent,
  getAverageScore,
  getPassingStudents,
};
