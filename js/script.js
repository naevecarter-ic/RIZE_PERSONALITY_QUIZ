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
   