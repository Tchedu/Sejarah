const questions = [
  {
    question: "Pada masa berburu dan meramu, manusia hidup secara nomaden. Apa alasan utama mereka menjalani pola hidup seperti ini?",
    answers: [
      { text: "Menghindari perang antar kelompok", correct: false },
      { text: "Mencari sumber makanan baru", correct: true },
      { text: "Menjaga tradisi leluhur", correct: false },
      { text: "Mengikuti perubahan iklim", correct: false },
    ],
  },
  {
    question: "Kapak genggam dan kapak perimbas adalah alat yang digunakan pada masa?",
    answers: [
      { text: "Perundagian", correct: false },
      { text: "Bercocok tanam", correct: false },
      { text: "Berburu dan meramu", correct: true },
      { text: "Kerajaan Hindu", correct: false },
    ],
  },
  {
    question: "Salah satu perubahan besar pada masa bercocok tanam adalah?",
    answers: [
      { text: "Manusia mulai menetap dan menanam padi", correct: true },
      { text: "Manusia mulai hidup nomaden", correct: false },
      { text: "Manusia mulai mengenal perdagangan", correct: false },
      { text: "Manusia mulai menggunakan logam", correct: false },
    ],
  },
  {
    question: "Manusia pada masa perundagian dikenal sebagai ahli dalam membuat barang dari?",
    answers: [
      { text: "Kayu", correct: false },
      { text: "Kulit hewan", correct: false },
       { text: "Logam", correct: true },
      { text: "Batu", correct: false },
    ],
  },
  {
    question: "Prasasti Yupa ditemukan di Kutai. Prasasti ini menggunakan aksara?",
    answers: [
      { text: "Jawa Kuno", correct: false },
       { text: "Pallawa", correct: true },
      { text: "Latin", correct: false },
      { text: "Kawi", correct: false },
    ],
  },
  {
    question: "Kerajaan Hindu pertama di Indonesia adalah?",
    answers: [
      { text: "Tarumanegara", correct: false },
      { text: "Majapahit", correct: false },
      { text: "Sriwijaya", correct: false },
      { text: "Kutai", correct: true },
    ],
  },
    {
    question: "Candi Borobudur adalah peninggalan dari masa?",
    answers: [
      { text: "Kerajaan Kutai", correct: false },
      { text: "Kerajaan Majapahit", correct: false },
      { text: "Kerajaan Mataram Kuno", correct: true },
      { text: "Kerajaan Demak", correct: false },
    ],
  },
    {
    question: "Kerajaan maritim yang menjadi pusat penyebaran agama Buddha di Asia Tenggara adalah?",
    answers: [
      { text: "Mataram Kuno", correct: false },
      { text: "Samudra Pasai", correct: false },
      { text: "Majapahit", correct: false },
      { text: "Sriwijaya", correct: true },
    ],
  },
  {
    question: "Kerajaan Islam pertama di Indonesia adalah?",
    answers: [
      { text: "Demak", correct: false },
      { text: "Samudra Pasai", correct: true },
      { text: "Aceh Darussalam", correct: false },
      { text: "Mataram Islam", correct: false },
    ],
  },
  {
    question: "Apa yang menjadi ciri utama dari masa aksara di Indonesia?",
    answers: [
      { text: "Mulai menggunakan alat logam", correct: false },
      { text: "Hidup menetap di perkampungan", correct: false },
      { text: "Penyebaran agama Hindu dan Buddha", correct: false },
      { text: "Mulai mengenal tulisan melalui prasasti", correct: true },
    ],
  },
];

// Variabel untuk quiz
let shuffledQuestions, currentQuestionIndex, score;

// Mulai Quiz
function startQuiz() {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;

  document.getElementById("score-container").classList.add("hidden");
  document.getElementById("next-btn").classList.add("hidden");
  document.getElementById("question-container").classList.remove("hidden");
  document.getElementById("quiz-container").classList.add("fade-in");
  setNextQuestion();
}

// Tampilkan Pertanyaan
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");

  questionElement.textContent = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    if (answer.correct) button.dataset.correct = true;
    button.addEventListener("click", selectAnswer);
    answersElement.appendChild(button);
  });
}

// Reset State
function resetState() {
  const nextButton = document.getElementById("next-btn");
  nextButton.classList.add("hidden");
  const answersElement = document.getElementById("answers");
  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild);
  }
}

// Pilih Jawaban
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
  }

  Array.from(document.getElementById("answers").children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct) button.classList.add("correct");
  });

  const nextButton = document.getElementById("next-btn");
  nextButton.classList.remove("hidden");
  if (currentQuestionIndex === shuffledQuestions.length - 1) {
    nextButton.textContent = "Finish";
  }
}

// Klik Next
document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    setNextQuestion();
  } else {
    showScore();
  }
});

// Tampilkan Skor Akhir
function showScore() {
  document.getElementById("question-container").classList.add("hidden");
  document.getElementById("score-container").classList.remove("hidden");
  document.getElementById("score").textContent = `Your score: ${score} out of ${questions.length}`;
}

// Mulai Quiz Saat Halaman Dimuat
startQuiz();
