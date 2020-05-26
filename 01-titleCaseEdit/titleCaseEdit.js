function titleCaseEdit(title) {
  var words = title.split(" ");
  var newWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  var newTitle = newWords.join(" ");
  return newTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;