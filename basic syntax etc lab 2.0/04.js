function foreignLanguage(country) {
  function english() {
    console.log("English");
  }
  function spanish() {
    console.log("Spanish");
  }
  function unknown() {
    console.log("unknown");
  }

  switch (country) {
    case "England":
    case "USA":
      english();
      break;
    case "Spain":
    case "Argentina":
    case "Mexico":
      spanish();
      break;
    default:
      unknown();
      break;
  }
}
foreignLanguage("USA");
foreignLanguage("Mexico");
foreignLanguage("Bulgaria");
