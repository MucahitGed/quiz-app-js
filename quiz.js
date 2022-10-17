//not using only for showing also could use that way

function Quiz(questions){
    this.questions = questions;
    this.questionIdx = questionIdx = 0;
    this.trueAnswers = trueAnswers = 0;
}

Quiz.prototype.bringQuestion = function(){
    return this.questions[this.questionIdx]; 
}

function Question(quesText , quesOptions , trueAnswer){
    this.quesText = quesText;
    this.quesOptions = quesOptions;
    this.trueAnswer = trueAnswer;
}

Question.prototype.checkAnswer = function(answer){
    return answer === this.trueAnswer;
}

let questions = [
    new Question("Which Language Is Not Front End" , {a: "HTML5" , b:"CSS3" , c:"Javascript" , d:"Phyton"} , "d"),
    new Question("Which Language Is Not Backend" , {a: "C++" , b:"CSS3" , c:"Node.js" , d:"Phyton"} , "b" ),
    new Question("Which Language Is Newest"  ,  {a: "Fortran" , b:"Java" , c:"Javascript" , d:"C++"} , "c"),
    new Question("When Javascript Is Invented"  ,  {a: "2001" , b:"1990" , c:"1993" , d:"1995"} , "a"),
    new Question("Which Is Not A Javascript Framework"  ,  {a: "Fortran" , b:"Vue.js" , c:"Angular" , d:"React"} , "a"),   
]

showQuestion();

function showQuestion(){
     for(let i =0 ; i<questions.length ; i++){
        console.log(questions[i].quesText)
        question_main.innerHTML = `<div class="question">${questions[i].quesText}</div>`
        options.innerHTML = `
        <div class="options">
            <button class="option">A:${questions[i].quesOptions.a}</button>
            <button class="option">B:${questions[i].quesOptions.b}</button>
            <button class="option">C:${questions[i].quesOptions.c}</button>
            <button class="option">D:${questions[i].quesOptions.d}</button>
        </div>`;
    }
    
    }
     option.forEach(opti =>{
         opti.addEventListener("click" , ()=>{
             console.log("worked");
             for(let answer in questions[i].quesOptions){
             if(answer == questions[i].trueAnswer){
                 option[i].classList.add("true")
                 console.log("worked")
             }}
         })    
     }) 



    