const {
  getHighestScoringStudent,
  getAverageScore,
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
