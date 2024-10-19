var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

// Output Strings with a for...of Loop //
// Log out array
console.log(programmingLanguages);

// For..of loop
for (var language of programmingLanguages) {
  console.log(`I can't wait to learn ${language}!`);
}

// Create a Numbered List with forEach() //
// Use forEach() to loop throught the elements and indexes of the array
programmingLanguages.forEach(function(item, index) {
  console.log(`${index +1}. ${item}`);
});

// Filter Elements by a String //
// Create updatedLanguages variable using filter() and then includes() in the callback function
var updatedLanguages = programmingLanguages.filter(function (language) {
  return language.includes("y");
});

// Log out updatedLanguages
console.log(updatedLanguages);