import { data } from "./data.js";

// sidebar logic

let parent = document.getElementById("parent");
let sidebar = document.getElementById("sidebar");
let blackArea = document.getElementById("black-area");

let currentQuestion = 5;
let selectedOption = null;

function OpenNav() {
  parent.classList.add("nav-active");
  sidebar.classList.add("active");
  blackArea.classList.add("active");
}

function CloseNav() {
  parent.classList.remove("nav-active");
  sidebar.classList.remove("active");
  blackArea.classList.remove("active");
}

document.getElementById("open").addEventListener("click", OpenNav);
document.getElementById("black-area").addEventListener("click", CloseNav);
document.getElementById("close").addEventListener("click", CloseNav);

// mapping all questions to the sidebar

function addQuestions() {
  const questionList = document.getElementById("question-list");
  questionList.innerHTML = "";

  data.forEach((level, index) => {
    const questionTab = document.createElement("div");
    questionTab.classList.add("question-tab");
    questionTab.textContent = `Question ${level.questionNumber}`;
    questionTab.dataset.index = index;

    questionTab.addEventListener("click", () => {
      updateQuestion(index);
    });

    questionList.appendChild(questionTab);
  });
}

addQuestions();

//quiz mapping logic
let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

function updateQuestion(queNo) {

  const progressBar =document.getElementById("progress-bar");
  currentQuestion = queNo;

  question.innerHTML = data[currentQuestion].question;
  option1.innerHTML = data[currentQuestion].option1;
  option2.innerHTML = data[currentQuestion].option2;
  option3.innerHTML = data[currentQuestion].option3;
  option4.innerHTML = data[currentQuestion].option4;

  let x = 100 / data.length * data[currentQuestion].questionNumber;
  
  progressBar.style.width = `${x}%`;

  document
    .querySelector(`[data-index="${currentQuestion}"]`)
    .classList.add("active");
}

updateQuestion(currentQuestion);

// change questions

// select an option

function selectOption(num) {
  document.querySelector(".op1").classList.remove("active");
  document.querySelector(".op2").classList.remove("active");
  document.querySelector(".op3").classList.remove("active");
  document.querySelector(".op4").classList.remove("active");

  switch (num) {
    case 1:
      document.querySelector(".op1").classList.add("active");
      selectedOption = 1;
      break;
    case 2:
      document.querySelector(".op2").classList.add("active");
      selectedOption = 2;
      break;
    case 3:
      document.querySelector(".op3").classList.add("active");
      selectedOption = 3;
      break;
    case 4:
      document.querySelector(".op4").classList.add("active");
      selectedOption = 4;
      break;
    default:
    // code block
  }
}
document.querySelector(".op1").addEventListener("click", function () {
  selectOption(1);
  console.log("selected option is", selectedOption);
});

document.querySelector(".op2").addEventListener("click", function () {
  selectOption(2);
  console.log("selected option is", selectedOption);
});
document.querySelector(".op3").addEventListener("click", function () {
  selectOption(3);
  console.log("selected option is", selectedOption);
});
document.querySelector(".op4").addEventListener("click", function () {
  selectOption(4);
  console.log("selected option is", selectedOption);
});

console.log(data[0].answer);





// questions nav button


let back = document.getElementById("back");
let front = document.getElementById("forward");

function goback(){
 
  currentQuestion = currentQuestion - 1;
   updateQuestion(currentQuestion);
}

back.addEventListener("click", function () {
 
  goback()
 
} )

function goforward(){
  currentQuestion = currentQuestion + 1;
   updateQuestion(currentQuestion);
}

front.addEventListener("click", function () {
  goforward()
 
} )