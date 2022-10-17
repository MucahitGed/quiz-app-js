const startBtn = document.querySelector(".startBtn");
const container =  document.querySelector(".container");
const content = document.querySelector(".content");
const question_main = document.querySelector(".question");
const options = document.querySelector(".options");
const option = document.querySelectorAll(".option");
const question_counter = document.querySelector(".question-counter")
const nextBtn = document.querySelector(".nextBtn");
const score = document.querySelector(".score");
const result = document.querySelector(".result");
const a_text = document.querySelector(".a");
const b_text = document.querySelector(".b");
const c_text = document.querySelector(".c");
const d_text = document.querySelector(".d");
const comment = document.querySelector(".comment")
const time = document.querySelector(".time")
startBtn.addEventListener("click" , ()=>{
    startBtn.style.display = "none";
    container.style.display = "flex";
    timerStart(time_left)
});


const quizData = [
    {
        quesTex: "Which Language Is Not Front End",
        quesOptions:[
            "HTML5" , "CSS3" , "Javascript" , "Phyton"
        ],
        trueAnswer:"Phyton"
    },
    {
        quesTex:"Which Language Is Not Backend" ,
        quesOptions:[
             "C++" ,"CSS3" ,"Node.js" ,"Phyton"
        ],
        trueAnswer:"CSS3"
    },
    {
        quesTex: "Which Language Is Newest",
        quesOptions:[
             "Fortran" ,"Java" ,"Javascript" ,"C++"
        ],
        trueAnswer: "Javascript"
    },
    {
        quesTex:"When Javascript Is Launched" ,
        quesOptions:[
             "2001" ,"1990" ,"1993" ,"1995"
        ],
        trueAnswer:"1995"
    },
    {
        quesTex: "Which Is Not A Javascript Framework",
        quesOptions:[
             "Fortran" ,"Vue.js" ,"Angular" ,"React"
        ],
        trueAnswer:"Fortran"
    }
];

let scoreCounter = 1;
let questionCounter = 1;
let currentQuiz = 0;
let time_left = 10;
showQuestion()

function showQuestion(){
    question_main.innerText = quizData[currentQuiz].quesTex;
    a_text.innerText = quizData[currentQuiz].quesOptions[0]
    b_text.innerText = quizData[currentQuiz].quesOptions[1]
    c_text.innerText = quizData[currentQuiz].quesOptions[2]
    d_text.innerText = quizData[currentQuiz].quesOptions[3]
    time.innerText = time_left

    question_counter.innerText = `${questionCounter} of ${quizData.length}`
    score.innerText = `${scoreCounter} out of ${quizData.length}`;
   
    if(scoreCounter >= 0 && scoreCounter <= 3){
        comment.innerText = "Lashara"
    }else{
        comment.innerText = "You are Perfect"
    }

    for(let i=0; i < option.length ; i++){
        option[i].setAttribute("onclick", "selectOption(this)");
    }
}


function selectOption(trueAnswer){
    clearInterval(int)
    let userAns = trueAnswer.innerText
    let correctAns = quizData[currentQuiz].trueAnswer
    console.log(trueAnswer.innerText)
    console.log(quizData[currentQuiz].trueAnswer)
    
    if(userAns === correctAns){
        trueAnswer.classList.add("true")
        scoreCounter++;
        }else{
        trueAnswer.classList.add("false")
         
        for(let i = 0; i < options.children.length ; i++){
            if(options.children[i].textContent == correctAns){
                options.children[i].classList.add("true") 
            }
        }
    }
    
    //show correct one
    //if(trueAnswer.classList.contains("false")){}
     for(let i=0; i < option.length ; i++){
         option[i].classList.add("disabled");
     }
     nextBtn.classList.add("active")
     selectOptionClean()
    }
   
    nextBtn.addEventListener("click" , ()=>{
        if(currentQuiz < quizData.length - 1 ){
            currentQuiz++;    
            questionCounter++  
            console.log(currentQuiz)
            showQuestion()   
            console.log(quizData.length)
            clearInterval(int)
            timerStart(time_left)
            for(let i=0; i < option.length ; i++){
                option[i].classList.remove("disabled");
                option[i].classList.add("enabled");
                option[i].classList.remove("true")
                option[i].classList.remove("false")
            }
        }else{
            result.style.display = "flex"
            container.style.display = "none"
        }
    })
    
    let correctAns = quizData[currentQuiz].trueAnswer
    
    function timerStart(time_left){
            int = setInterval(timer , 1000);
        function timer(){
            time_left--;
            time.innerText = time_left
            console.log(time_left)

            if(time_left <= 0){
                clearInterval(int)
                nextBtn.style.display = "block"
                 
                for(let i = 0; i < options.children.length ; i++){
                    if(options.children[i].textContent == correctAns){
                        options.children[i].classList.add("true")
                        
                    }
                    option[i].classList.add("disabled");
                }
            }
        }
    }
    

    
