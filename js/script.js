console.log("script.js connected!");
let question = document.querySelectorAll(".question-block");

let answers = [];

question.forEach(".question-block", (q) => {
  buttons = q.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.classList.remove("selected");
    button.addEventListener("click", () => {
      let ans = button.getAttribute("data-answer");
      answers.push(ans);
      button.classList.add("selected");
      console.log(answers);
    });
  });
});