//your code here

  function updateWordCount() {
    var text = document.getElementById("evaluatedText").value;
    var wordCount = text.split(" ").length;
    document.getElementById("wordCount").innerHTML = wordCount;
  }
  document.getElementById("evaluatedText").addEventListener("input", updateWordCount);


  function updateWordCount() {
    var text = document.getElementById("evaluatedText").value;
    var wordCount = text.trim() == "" ? 0 : text.split(" ").length;
    document.getElementById("wordCount").innerHTML = wordCount;
  }
  document.getElementById("evaluatedText").addEventListener("input", updateWordCount);

