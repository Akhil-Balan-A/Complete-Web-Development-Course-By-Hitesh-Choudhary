document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const scoreText = document.getElementById("score");
  const resultContainer = document.getElementById("result-container");

  const questions = [
    // 1
    {
      question: "What is the capital of France?",
      answers: [
        { text: "London", correct: false },
        { text: "Paris", correct: true },
        { text: "Berlin", correct: false },
        { text: "Rome", correct: false },
      ],
    },

    // 2
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false },
      ],
    },

    // 3
    {
      question: "Who wrote 'Hamlet'?",
      answers: [
        { text: "Leo Tolstoy", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Mark Twain", correct: false },
        { text: "Charles Dickens", correct: false },
      ],
    },

    // // 4
    // {
    //     question: "Which gas do plants absorb from the atmosphere?",
    //     answers: [
    //         { text: "Oxygen", correct: false },
    //         { text: "Carbon Dioxide", correct: true },
    //         { text: "Nitrogen", correct: false },
    //         { text: "Hydrogen", correct: false }
    //     ]
    // },

    // // 5
    // {
    //     question: "What is the largest ocean on Earth?",
    //     answers: [
    //         { text: "Atlantic Ocean", correct: false },
    //         { text: "Indian Ocean", correct: false },
    //         { text: "Pacific Ocean", correct: true },
    //         { text: "Arctic Ocean", correct: false }
    //     ]
    // },

    // // 6
    // {
    //     question: "How many continents are there?",
    //     answers: [
    //         { text: "5", correct: false },
    //         { text: "7", correct: true },
    //         { text: "6", correct: false },
    //         { text: "8", correct: false }
    //     ]
    // },

    // // 7
    // {
    //     question: "Which is the largest mammal?",
    //     answers: [
    //         { text: "Elephant", correct: false },
    //         { text: "Blue Whale", correct: true },
    //         { text: "Giraffe", correct: false },
    //         { text: "Hippopotamus", correct: false }
    //     ]
    // },

    // // 8
    // {
    //     question: "What is H2O commonly known as?",
    //     answers: [
    //         { text: "Salt", correct: false },
    //         { text: "Water", correct: true },
    //         { text: "Oxygen", correct: false },
    //         { text: "Hydrogen", correct: false }
    //     ]
    // },

    // // 9
    // {
    //     question: "Who invented the light bulb?",
    //     answers: [
    //         { text: "Albert Einstein", correct: false },
    //         { text: "Thomas Edison", correct: true },
    //         { text: "Nikola Tesla", correct: false },
    //         { text: "Alexander Bell", correct: false }
    //     ]
    // },

    // // 10
    // {
    //     question: "Which country is the Taj Mahal located in?",
    //     answers: [
    //         { text: "Pakistan", correct: false },
    //         { text: "India", correct: true },
    //         { text: "Bangladesh", correct: false },
    //         { text: "Nepal", correct: false }
    //     ]
    // },

    // // 11
    // {
    //     question: "Which is the smallest prime number?",
    //     answers: [
    //         { text: "1", correct: false },
    //         { text: "2", correct: true },
    //         { text: "3", correct: false },
    //         { text: "5", correct: false }
    //     ]
    // },

    // // 12
    // {
    //     question: "What is the chemical symbol for gold?",
    //     answers: [
    //         { text: "Ag", correct: false },
    //         { text: "Au", correct: true },
    //         { text: "Gd", correct: false },
    //         { text: "Go", correct: false }
    //     ]
    // },

    // // 13
    // {
    //     question: "Who painted the Mona Lisa?",
    //     answers: [
    //         { text: "Leonardo da Vinci", correct: true },
    //         { text: "Picasso", correct: false },
    //         { text: "Michelangelo", correct: false },
    //         { text: "Van Gogh", correct: false }
    //     ]
    // },

    // // 14
    // {
    //     question: "Which is the longest river in the world?",
    //     answers: [
    //         { text: "Nile", correct: true },
    //         { text: "Amazon", correct: false },
    //         { text: "Yangtze", correct: false },
    //         { text: "Mississippi", correct: false }
    //     ]
    // },

    // // 15
    // {
    //     question: "How many days are there in a leap year?",
    //     answers: [
    //         { text: "365", correct: false },
    //         { text: "366", correct: true },
    //         { text: "364", correct: false },
    //         { text: "367", correct: false }
    //     ]
    // },

    // // 16
    // {
    //     question: "Which organ pumps blood through the body?",
    //     answers: [
    //         { text: "Lungs", correct: false },
    //         { text: "Heart", correct: true },
    //         { text: "Kidney", correct: false },
    //         { text: "Brain", correct: false }
    //     ]
    // },

    // // 17
    // {
    //     question: "Which country is famous for the Great Wall?",
    //     answers: [
    //         { text: "India", correct: false },
    //         { text: "China", correct: true },
    //         { text: "Japan", correct: false },
    //         { text: "Korea", correct: false }
    //     ]
    // },

    // // 18
    // {
    //     question: "What is the freezing point of water?",
    //     answers: [
    //         { text: "0°C", correct: true },
    //         { text: "10°C", correct: false },
    //         { text: "5°C", correct: false },
    //         { text: "-10°C", correct: false }
    //     ]
    // },

    // // 19
    // {
    //     question: "Which planet has a ring system?",
    //     answers: [
    //         { text: "Mars", correct: false },
    //         { text: "Saturn", correct: true },
    //         { text: "Venus", correct: false },
    //         { text: "Mercury", correct: false }
    //     ]
    // },

    // // 20
    // {
    //     question: "What is the national animal of India?",
    //     answers: [
    //         { text: "Lion", correct: false },
    //         { text: "Tiger", correct: true },
    //         { text: "Elephant", correct: false },
    //         { text: "Peacock", correct: false }
    //     ]
    // },

    // // 21
    // {
    //     question: "Which metal is liquid at room temperature?",
    //     answers: [
    //         { text: "Iron", correct: false },
    //         { text: "Mercury", correct: true },
    //         { text: "Gold", correct: false },
    //         { text: "Aluminum", correct: false }
    //     ]
    // },

    // // 22
    // {
    //     question: "How many players are there in a football team?",
    //     answers: [
    //         { text: "9", correct: false },
    //         { text: "10", correct: false },
    //         { text: "11", correct: true },
    //         { text: "12", correct: false }
    //     ]
    // },

    // // 23
    // {
    //     question: "Which is the largest desert in the world?",
    //     answers: [
    //         { text: "Sahara", correct: true },
    //         { text: "Gobi", correct: false },
    //         { text: "Kalahari", correct: false },
    //         { text: "Arabian", correct: false }
    //     ]
    // },

    // // 24
    // {
    //     question: "Who discovered gravity?",
    //     answers: [
    //         { text: "Albert Einstein", correct: false },
    //         { text: "Isaac Newton", correct: true },
    //         { text: "Galileo", correct: false },
    //         { text: "Edison", correct: false }
    //     ]
    // },

    // // 25
    // {
    //     question: "What is the boiling point of water?",
    //     answers: [
    //         { text: "100°C", correct: true },
    //         { text: "50°C", correct: false },
    //         { text: "80°C", correct: false },
    //         { text: "150°C", correct: false }
    //     ]
    // },

    // // 26
    // {
    //     question: "Which country won the FIFA World Cup 2018?",
    //     answers: [
    //         { text: "Brazil", correct: false },
    //         { text: "Germany", correct: false },
    //         { text: "France", correct: true },
    //         { text: "Argentina", correct: false }
    //     ]
    // },

    // // 27
    // {
    //     question: "Which gas do humans breathe out?",
    //     answers: [
    //         { text: "Oxygen", correct: false },
    //         { text: "Carbon Dioxide", correct: true },
    //         { text: "Nitrogen", correct: false },
    //         { text: "Methane", correct: false }
    //     ]
    // },

    // // 28
    // {
    //     question: "What is 5 × 6?",
    //     answers: [
    //         { text: "11", correct: false },
    //         { text: "30", correct: true },
    //         { text: "20", correct: false },
    //         { text: "26", correct: false }
    //     ]
    // },

    // // 29
    // {
    //     question: "Which continent is India located in?",
    //     answers: [
    //         { text: "Africa", correct: false },
    //         { text: "Asia", correct: true },
    //         { text: "Europe", correct: false },
    //         { text: "Australia", correct: false }
    //     ]
    // },

    // // 30
    // {
    //     question: "Which animal is known as the King of the Jungle?",
    //     answers: [
    //         { text: "Tiger", correct: false },
    //         { text: "Lion", correct: true },
    //         { text: "Bear", correct: false },
    //         { text: "Cheetah", correct: false }
    //     ]
    // },

    // // 31
    // {
    //     question: "What is the tallest mountain in the world?",
    //     answers: [
    //         { text: "Mount Everest", correct: true },
    //         { text: "K2", correct: false },
    //         { text: "Kanchenjunga", correct: false },
    //         { text: "Makalu", correct: false }
    //     ]
    // },

    // // 32
    // {
    //     question: "Which device is used to measure temperature?",
    //     answers: [
    //         { text: "Barometer", correct: false },
    //         { text: "Thermometer", correct: true },
    //         { text: "Compass", correct: false },
    //         { text: "Altimeter", correct: false }
    //     ]
    // },

    // // 33
    // {
    //     question: "What is the currency of Japan?",
    //     answers: [
    //         { text: "Yen", correct: true },
    //         { text: "Won", correct: false },
    //         { text: "Dollar", correct: false },
    //         { text: "Euro", correct: false }
    //     ]
    // },

    // // 34
    // {
    //     question: "Which blood group is known as the universal donor?",
    //     answers: [
    //         { text: "A", correct: false },
    //         { text: "O Negative", correct: true },
    //         { text: "B", correct: false },
    //         { text: "AB Positive", correct: false }
    //     ]
    // },

    // // 35
    // {
    //     question: "Which festival is known as the Festival of Lights?",
    //     answers: [
    //         { text: "Holi", correct: false },
    //         { text: "Diwali", correct: true },
    //         { text: "Eid", correct: false },
    //         { text: "Christmas", correct: false }
    //     ]
    // },

    // // 36
    // {
    //     question: "Which instrument is used to see tiny objects?",
    //     answers: [
    //         { text: "Telescope", correct: false },
    //         { text: "Microscope", correct: true },
    //         { text: "Periscope", correct: false },
    //         { text: "Stethoscope", correct: false }
    //     ]
    // },

    // // 37
    // {
    //     question: "Which country has the largest population?",
    //     answers: [
    //         { text: "USA", correct: false },
    //         { text: "China", correct: false },
    //         { text: "India", correct: true },
    //         { text: "Russia", correct: false }
    //     ]
    // },

    // // 38
    // {
    //     question: "Which part of the plant makes food?",
    //     answers: [
    //         { text: "Root", correct: false },
    //         { text: "Leaf", correct: true },
    //         { text: "Stem", correct: false },
    //         { text: "Flower", correct: false }
    //     ]
    // },

    // // 39
    // {
    //     question: "Which is the fastest land animal?",
    //     answers: [
    //         { text: "Cheetah", correct: true },
    //         { text: "Lion", correct: false },
    //         { text: "Horse", correct: false },
    //         { text: "Leopard", correct: false }
    //     ]
    // },

    // // 40
    // {
    //     question: "How many bones are in the adult human body?",
    //     answers: [
    //         { text: "206", correct: true },
    //         { text: "210", correct: false },
    //         { text: "198", correct: false },
    //         { text: "250", correct: false }
    //     ]
    // },

    // // 41
    // {
    //     question: "What is the main source of energy for Earth?",
    //     answers: [
    //         { text: "Moon", correct: false },
    //         { text: "Sun", correct: true },
    //         { text: "Stars", correct: false },
    //         { text: "Fire", correct: false }
    //     ]
    // },

    // // 42
    // {
    //     question: "Which country invented pizza?",
    //     answers: [
    //         { text: "India", correct: false },
    //         { text: "Italy", correct: true },
    //         { text: "France", correct: false },
    //         { text: "USA", correct: false }
    //     ]
    // },

    // // 43
    // {
    //     question: "Which language has the most native speakers?",
    //     answers: [
    //         { text: "English", correct: false },
    //         { text: "Mandarin Chinese", correct: true },
    //         { text: "Spanish", correct: false },
    //         { text: "Hindi", correct: false }
    //     ]
    // },

    // // 44
    // {
    //     question: "How many colors are in a rainbow?",
    //     answers: [
    //         { text: "5", correct: false },
    //         { text: "7", correct: true },
    //         { text: "6", correct: false },
    //         { text: "8", correct: false }
    //     ]
    // },

    // // 45
    // {
    //     question: "Which continent is the coldest?",
    //     answers: [
    //         { text: "Europe", correct: false },
    //         { text: "Antarctica", correct: true },
    //         { text: "Asia", correct: false },
    //         { text: "North America", correct: false }
    //     ]
    // },

    // // 46
    // {
    //     question: "What is the square root of 64?",
    //     answers: [
    //         { text: "6", correct: false },
    //         { text: "8", correct: true },
    //         { text: "7", correct: false },
    //         { text: "9", correct: false }
    //     ]
    // },

    // // 47
    // {
    //     question: "Who was the first man to walk on the Moon?",
    //     answers: [
    //         { text: "Neil Armstrong", correct: true },
    //         { text: "Buzz Aldrin", correct: false },
    //         { text: "Yuri Gagarin", correct: false },
    //         { text: "Elon Musk", correct: false }
    //     ]
    // },

    // // 48
    // {
    //     question: "Which country is known as the Land of the Rising Sun?",
    //     answers: [
    //         { text: "China", correct: false },
    //         { text: "Japan", correct: true },
    //         { text: "Korea", correct: false },
    //         { text: "Thailand", correct: false }
    //     ]
    // },

    // // 49
    // {
    //     question: "Which element do all living things need to survive?",
    //     answers: [
    //         { text: "Gold", correct: false },
    //         { text: "Water", correct: true },
    //         { text: "Helium", correct: false },
    //         { text: "Mercury", correct: false }
    //     ]
    // },

    // 50
    {
      question: "Which shape has three sides?",
      answers: [
        { text: "Circle", correct: false },
        { text: "Triangle", correct: true },
        { text: "Square", correct: false },
        { text: "Rectangle", correct: false },
      ],
    },
  ];

  let currentQuestion = 0;
  let score = 0;
  let answer = undefined;

  // Start Quiz
  startBtn.addEventListener("click", () => {
    startBtn.classList.add("hidden");
    resultContainer.classList.remove("hidden"); // keep result hidden
    questionContainer.classList.remove("hidden");

    currentQuestion = 0;
    score = 0;

    showQuestion();
  });

    
  function showQuestion() {
    if (currentQuestion >= questions.length) {
      showFinalResult();
      return;
    }

    answer = undefined;
    nextBtn.classList.add("hidden");

    const q = questions[currentQuestion];
    questionText.innerText = `Question No ${currentQuestion + 1}: ${
      q.question
    }`;

    choicesList.innerHTML = "";

    q.answers.forEach((options, index) => {
      const li = document.createElement("li");

      li.innerHTML = `
        <input type="radio" name="option" id="opt${index}" data-correct="${options.correct}">
        <label for="opt${index}">${options.text}</label>
      `;

      li.querySelector("input").addEventListener("change", (e) => {
        answer = e.target.dataset.correct === "true";
        nextBtn.classList.remove("hidden");

        nextBtn.innerText =
          currentQuestion === questions.length - 1
            ? "Get Final Result"
            : "Next Question";
      });

      choicesList.appendChild(li);
    });

    scoreText.innerText = score; // show live score
  }

  nextBtn.addEventListener("click", () => {
    if (answer === true) score++;

    currentQuestion++;

    showQuestion();
  });

  function showFinalResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    scoreText.innerText = `${score} out of ${questions.length}`;
  }

  restartBtn.addEventListener("click", () => {
    score = 0;
    currentQuestion = 0;

    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");

    showQuestion();
  });
});
