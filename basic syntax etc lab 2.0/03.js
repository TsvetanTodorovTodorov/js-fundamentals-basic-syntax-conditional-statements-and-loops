function excellent(grade) {
  function excellent() {
    console.log("Excellent");
  }
  function notExcellent() {
    console.log("Not excellent");
  }

  if (grade >= 5.5) {
    excellent();
  } else {
    notExcellent();
  }
}
excellent(5.5);
excellent(4.35);
