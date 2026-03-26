# Function Design Recipe Challenge level 1

## 1. Requirements:

```
    Implement a function getHighestScoringStudent(students) that takes an array of students and returns the highest scoring student.

    Implement a function getAverageScore(students) that takes an array of students and returns the average score across all student. You should round up to the highest number.
```

## 2. User story:

> As a user, I want to have a getHighestScoringStudent(students) function
> that return the highest scoring student object.

> As a user, I want to have a getAverageScore(students) function
> that return the average scoring of the students

## 3. Test

```
- Given we call `getHighestScoringStudent(students)` with an arrays of students (which include name and grade), it return the highest scoring student object
- Given we call `getAverageScore(students)` with an arrays of students (which include name and grade), it return the average score int
```

# Function Design Recipe Challenge level 2

## 1. Requirements:

```
    Implement a function getPassingStudents(students) that takes an array of students

    returns:
    - an array of names of students with grades >= 50.
    - sorts the passing students alphabetically.
```

## 2. User story:

> As a user, I want to have a getPassingStudents(students) function
> that return passing grade student name arrays

## 3. Test

```
- Given we call `getPassingStudents(students)` with an array of name of passing student

    ['Alice', 'Charlie']

```

# Function Design Recipe Challenge level 3

## 1. Requirements:

```
    Implement a function analyzeGrades(students) that takes an array of objects

    returns a summary object:
    - the average round up (int)
    - the highest scoring student (highest: object)
    - the lowest scoring student (lowest: object)
    - the passing student name (passing : array student name)
```

## 2. User story:

> As a user, I want to have a analyzeGrades(students) function
> that return a summary overview

## 3. Test

```
- Given we call `analyzeGrades(students)` with an array of object, it returns the summary overview:

    {
        average: 67,
        highest: { name: 'Alice', grade: 90 },
        lowest: { name: 'Bob', grade: 40 },
        passing: ['Alice', 'Charlie']
    }

```
