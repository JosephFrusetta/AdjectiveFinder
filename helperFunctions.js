// Makes the response read-able to the user
const renderResponse = (res) => {
  // Lets you know if res is false-y in the console
  if(!res){
    console.log(res.status);
  }
  // If there's no reasponse, let the user know no results were found for that word.
  if(!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions for that particular word</p>";
    return;
  }
  // Creates an array
  let wordList = [];
  // Loops through the response and ends after providing 15 results
  for(let i = 0; i < Math.min(res.length, 15); i++){
  // Creates a list of words
    wordList.push(`<li>${res[i].word}</li>`);
  }
  // Joins the array of strings into a single string
  wordList = wordList.join("");
  // Adds some explanation text to the results of the response
  responseField.innerHTML = `<p>Here are some adjectives that describe your word:</p><ol>${wordList}</ol>`;
  return
}