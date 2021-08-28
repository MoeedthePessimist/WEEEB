const quizQues = [
    {
        question: 'How old is florin?',
        a: '10',
        b: '15',
        c: '17',
        d: '110',
        correct: 'c'
    }, 
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Who is he the President of US',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Joe Biden',
        d: 'Your mom',
        correct: 'c'
    },
    {
        question: 'What does Html stands for',
        a: 'hypertext markup language',
        b: 'cascading style sheets',
        c: 'javascript object notation',
        d: 'hellow',
        correct: 'a'
    },
    {
        question: 'what year was javascript launched?',
        a: '1995',
        b: '1996',
        c: '2018',
        d: 'none of the above',
        correct: 'd'
    }

]

let currentQues = 0;
let totalScore = 0;

const quesElem = document.getElementById('question');
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit');
// let answered;
let currentQuizData = undefined;
loadQuiz();

function loadQuiz() {
    currentQuizData = quizQues[currentQues];
    quesElem.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    // currentQues++;
}

function getSelected() {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => {
        if(answer.checked){
            console.log(answer.id);
            return answer.id;
        }
        answer.checked = null;
    });
    return undefined;
}


submitBtn.addEventListener('click', () => {
    
    const answer = getSelected();
    
    
    if(answer){
        currentQues++;
        if(currentQues < quizQues.length){
            loadQuiz();
        } else{
            // TODO: Show results
            alert('you finished')
        }
        
    }


    // loadQuiz();
})