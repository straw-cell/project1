

// sidebar logic

let parent = document.getElementById("parent");
let sidebar = document.getElementById("sidebar");
let blackArea = document.getElementById("black-area");





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

//quiz mapping logic
let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

question.innerHTML=data[0].question

