function student(name, age, grade) {
  function studentName(str) {
    return str;
  }
  function studentAge(num) {
    return num;
  }
  function studentGrade(gr) {
    return gr;
  }

  console.log(
    `Name: ${studentName(name)}, Age: ${studentAge(age)}, Grade: ${studentGrade(
      grade
    ).toFixed(2)}`
  );
}
student("John", 15, 5.54678);
