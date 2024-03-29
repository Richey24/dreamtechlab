const quizData = [
  {
    question: "What does the HTML5 <p> tag represent?",
    a: "Parenthesis",
    b: "Paragraph",
    c: "Pagination",
    d: "Page",
    correct: "b",
  },
  {
    question: "What is an essential part of HTML5 <href> tag??",
    a: "<a> anchor tag",
    b: "<b> bow tag",
    c: "<c> console tag",
    d: "<d> draft tag",
    correct: "a",
  },
  {
    question: "In the HTML5 <img> tag, what does the src  attribute represent?",
    a: "Color source",
    b: "Route source",
    c: "Font source",
    d: "Image source",
    correct: "d",
  },
  {
    question: "In a HTML5 <h1> tag, what does the number affect? ",
    a: "Length of text area",
    b: "Position of the text",
    c: "Size of the text",
    d: "none of the above",
    correct: "c",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Hypertemplate Markup Language",
    correct: "a",
  },
  {
    question: "Which HTML5 tag represents a page link?",
    a: "<href>",
    b: "<link>",
    c: "<hyperlink>",
    d: "none of the above",
    correct: "a",
  },
  {
    question: "Choose the correct HTML5 element for the largest heading?",
    a: "<head>",
    b: "<h1>",
    c: "<heading>",
    d: "<h5>",
    correct: "b",
  },
  {
    question: "What is the correct HTML5 tag to show bold text?",
    a: "<bold>",
    b: "<italics>",
    c: "<b>",
    d: "<bd>",
    correct: "c",
  },
  {
    question: "How is color not defined in  HTML5?  ",
    a: "RGB",
    b: "Integer",
    c: "Color name",
    d: "HEX",
    correct: "b",
  },

  {
    question:
      "Which tag can be used in lieu of the <table> tags for positioning elements in HTML5?",
    a: "<pos>",
    b: "<div>",
    c: "<loc>",
    d: "<br>",
    correct: "b",
  },
  {
    question: "What does HTML5 <td> stand for?",
    a: "Tab data",
    b: "Text data",
    c: "Tag data",
    d: "Table row data",
    correct: "d",
  },
  {
    question: "What does HTML5 <br> tag stand for?",
    a: "Line Break",
    b: "Border ratio",
    c: "bolder red",
    d: "Brown color",
    correct: "a",
  },
  {
    question: "What does the HTML5 <ul> represent?",
    a: "Underlined list",
    b: "Uppercased list ",
    c: "Unfiltered list",
    d: "Unordered list",
    correct: "d",
  },

  {
    question: "What does HTML5 <i> tag stand for?",
    a: "Italics text",
    b: "Indent text",
    c: "Include text",
    d: "none of the above",
    correct: "a",
  },
  {
    question: "What does the HTML5 <li> tag stand for?",
    a: "Last item",
    b: "List item",
    c: "List index",
    d: "none of the above",
    correct: "b",
  },

  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "none of the above",
    correct: "b",
  },
  {
    question:
      "Where are elements class attributes definitions generally defined?",
    a: "CSS",
    b: "JSON",
    c: "XML",
    d: "JavaScript",
    correct: "a",
  },
  {
    question: "How can you integrate css in a webpage?",
    a: "Embedded or internal method only ",
    b: "Linked or imported or external method",
    c: "Inline method only",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What are some css frameworks ?",
    a: "Bootstrap and UIkit",
    b: "Foundation and Gumby",
    c: "Semantic UI",
    d: "All of the above",
    correct: "d",
  },

  {
    question: "What are some css Selectors?",
    a: "CSS Element Selector",
    b: "CSS Class Selector",
    c: "CSS indie Selector",
    d: "a and b ",
    correct: "d",
  },
  {
    question: "Choose the correct method to link an external style sheet?",
    a: "<src rel=’stylesheet’ type=’text/css’ href=’style.css’> ",
    b: "<link rel=’stylesheet’ type=’text/css’ href=’style.css’> ",
    c: "<embed rel=’stylesheet’ type=’text/css’ href=’style.css’> ",
    d: "<script rel=’stylesheet’ type=’text/css’ href=’style.css’> ",
    correct: "b",
  },

  {
    question: "Inside what element do you put javascript?",
    a: "<js>",
    b: "<scripttag>",
    c: "<javascript>",
    d: "<script>",
    correct: "d",
  },
  {
    question: "What is the correct place to insert javascript?",
    a: "<header>",
    b: "<body>",
    c: "<footer>",
    d: "all of the above",
    correct: "b",
  },
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question:
      "Which is the correct way to reference an external script called “maps.js”?  ",
    a: "<script name=”maps.js”>",
    b: "<script href=”maps.js>",
    c: "<script src=”maps.js”>",
    d: "none of the above",
    correct: "c",
  },
  {
    question:
      "Which is the correct syntax to write “Hello World!” in an alert box in Javascript?",
    a: "message('Hello world!'')",
    b: "msgbox('Hello world!')",
    c: "alertbox('Hello World!')",
    d: "alert('Hello World!')",
    correct: "d",
  },
  {
    question: "What is the correct syntax for an IF statement in Javascript? ",
    a: "if age = 10",
    b: "if(age===10)",
    c: "if age equals 10",
    d: "if(age equals 10)",
    correct: "b",
  },
  {
    question:
      "What is correct syntax to check that Student is not equal to Ted in Javascript?",
    a: "if(Student Not = 'Ted'",
    b: "if(Student != 'Ted')",
    c: "if(Student <> 'Ted'",
    d: "if(Student Not == 'Ted'",
    correct: "b",
  },
  {
    question: "How can you add a comment in javascript?",
    a: "//",
    b: "*/",
    c: "*",
    d: "/",
    correct: "a",
  },
  {
    question:
      "Which of the following is NOT an acceptable way to declare a variable in Javascript?",
    a: "let customer ='Suzie'",
    b: "const customer = 'Suzie'",
    c: "var customer = 'Suzie'",
    d: "set customer = 'Suzie'",
    correct: "d",
  },
  {
    question:
      "Which is the correct syntax for opening a new window called screen1 in Javascript?",
    a: "screen1 = window.new('dreamtechacademy.live')",
    b: "screen1=window.open('dreamtechacademy.live')",
    c: "screen1 = window.launch('dreamtechacademy.live')",
    d: "screen1 = window.display(“dreamtechacademy.live”)",
    correct: "b",
  },
  {
    question:
      "Which operator is used to append a value to a string variable in javascript?",
    a: "append",
    b: "+",
    c: "=",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does the “+=” operator do when used as a+=b in Javascript?",
    a: "Replaces variable a with value in variable b",
    b: "Replaces variable with a with the longest string between variable a and variable b",
    c: "Append variable a with variable b",
    d: "none of the above",
    correct: "c",
  },
  {
    question:
      "What will the following code return: Boolean(20 > 25) in Javascript? ",
    a: "false",
    b: "true",
    c: "NaN",
    d: "Undefined",
    correct: "a",
  },
  {
    question:
      "In Javascript what will the final code statement evaluate to?  var house = “sold”; if(house)",
    a: "Undefined",
    b: "NaN",
    c: "true",
    d: "false",
    correct: "c",
  },
  {
    question: "What does JSON stands for?",
    a: "Javascript Oriented Notation",
    b: "Javascript Object Notation",
    c: "Javascript Open Notation",
    d: "none of the above",
    correct: "b",
  },
];

const TestTimeLimit = 1800;
const counter = document.querySelectorAll(".counter");
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let studentName = "";
let studentEmail = "";
let studentPhone = "";
let coursename = "";
let htmlScore = 0;
let cssScore = 0;
let jsScore = 0;

const urlParams = new URLSearchParams(location.search);

// window.addEventListener("load", () => {
//   const status = document.cookie;
//   if (!status) {
//     window.location.href = "/quiz/index.html";
//   }
// });

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  //console.log(questionEl);
  if (questionEl != null) {
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

async function sendEmail() {
  const message = {
    name: sessionStorage.getItem("name"),
    email: sessionStorage.getItem("email"),
    phoneNumber: sessionStorage.getItem("phone"),
    quizCourse: sessionStorage.getItem("course"),
    score: score,
    total: quizData.length,
    htmlScore: htmlScore,
    cssScore: cssScore,
    jsScore: jsScore,
  };
  await fetch("https://dreamtechbackend.azurewebsites.net/send/mail", {
    method: "POST",
    body: JSON.stringify(message),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  await fetch("https://dreamtechbackend.azurewebsites.net/user/date", {
    method: "POST",
    body: JSON.stringify({ email: message.email }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

if (submitBtn != null)
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }

      currentQuiz++;

      if (currentQuiz === 15 && score < 7) {
        quizData.length = 15;
        htmlScore = score;
      }

      if (currentQuiz === 15) {
        htmlScore = score;
      }

      if (currentQuiz === 21) {
        cssScore = score - htmlScore;
      }

      if (currentQuiz === quizData.length - 1) {
        jsScore = score - (htmlScore + cssScore);
      }

      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        // send quiz results to us
        sendEmail();
      }
    }
  });
