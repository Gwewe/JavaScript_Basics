const {
  getHighestScoringStudent,
  getAverageScore,
  getPassingStudents,
  analyzeGrades,
} = require("./challenge_one");

// Given we call `getHighestScoringStudent(students)`
// with an arrays of students (which include name and grade),
// it return the highest scoring student object

const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 40 },
  { name: "Charlie", grade: 70 },
];

describe("Problem 1 : get the highest scoring student", () => {
  it("from the arrays, it return the highest scoring student object", () => {
    const highestScore = getHighestScoringStudent(students);
    expect(highestScore).toStrictEqual({
      name: "Alice",
      grade: 90,
    });
  });
});

// Given we call `getAverageScore(students)`
// with an arrays of students (which include name and grade),
// it return the average score int

describe("Problem 2: get the average score for the students arrays", () => {
  it("return the average score as an integer", () => {
    const averageScore = getAverageScore(students);
    expect(averageScore).toStrictEqual(67);
  });
});

// Given we call `getPassingStudents(students)` with an array object of students (wich include name and grade)
// return an arrays of name of the passing student
// passing student have more or equal 50 grade

describe("Problem 3: get the passing student name", () => {
  it("return array of student name", () => {
    const passingStudent = getPassingStudents(students);
    expect(passingStudent).toStrictEqual(["Alice", "Charlie"]);
  });
});

// Given we call `analyzeGrades(students)`
// with an array of object,
// it returns the summary overview
describe("Problem 4: analyze grades of students", () => {
  it("it's return an array summary", () => {
    const overviewGradesStudents = analyzeGrades(students);
    expect(overviewGradesStudents).toStrictEqual({
      average: 67,
      highest: { name: "Alice", grade: 90 },
      lowest: { name: "Bob", grade: 40 },
      passing: ["Alice", "Charlie"],
    });
  });
});
