console.log("script.js connected!");
let question = document.querySelectorAll("#question");

let answers = [];

question.forEach(function(button) {
  button.querySelectorAll(".answer-btn").forEach(function(answerButton) {
    answerButton.addEventListener("click", function() {
        button.querySelectorAll(".answer-btn").forEach(function(btn){
            btn.classList.remove("selected");
        });
        let ans = answerButton.getAttribute("data-answer");
        answerButton.classList.add("selected");
        answers.push(ans);
        console.log(answers);
    });
  });
});

let resultsButton = document.querySelector("#show-results");
resultsButton.addEventListener("click", function() {
    let result = getResults(answers);
    console.log(result);
    
});

function getResults(array){
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "A") {
            num = num + 1;
        } else if (array[i] === "B") {
            num = num + 2;
        } else if (array[i] === "C") {
            num = num + 3;
        } else {
            num = num + 4;
        }
    }
    let result = "";
    if (num <= 4){
        result = "Stetson"
    } else if (num > 4 && num <= 8){
        result = "Baseball Cap"
    } else if (num > 8 && num <= 12){
        result = "Fedora"
    } else {
        result = "Top Hat"
    }
    return result;
}
   