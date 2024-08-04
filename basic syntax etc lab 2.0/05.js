function monthPrinter(month) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (month >= 1 && month <= 12) {
    console.log(months.splice(month - 1, 1).join(" "));
  } else {
    console.log("Error!");
  }
}
monthPrinter(2);
monthPrinter(13);
