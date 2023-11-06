// Get references to the HTML elements
const sentenceElement = document.getElementById("sentence");
const inputElement = document.getElementById("input");
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("timer");
const resultDiv = document.getElementById("result");
const speedSpan = document.getElementById("speed");
const accuracySpan = document.getElementById("accuracy");
const retryButton = document.getElementById("retry-btn");

// Define the sentences
const sentences = `
  The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!
`;

// Variables to track the test state
let timer;
let startTime;
let sentenceIndex;
let correctWords = 0;
let totalWords = 0;

// Function to start the typing test
function startTest() {
  // Enable the input field
  inputElement.removeAttribute("disabled");
  // Display the paragraph
  sentenceElement.textContent = sentences;
  // Disable the start button
  startButton.setAttribute("disabled", true);

  // Initialize the timer
  const duration = 30; // 30 seconds
  startTime = Date.now();
  timer = setInterval(updateTimer, 1000);
  updateTimer(); // Update the timer immediately

  // Initialize the test variables
  sentenceIndex = 0;
  correctWords = 0;
  totalWords = 0;
}

// Function to update the timer
function updateTimer() {
  const currentTime = Date.now();
  const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
  const remainingSeconds = Math.max(0, 30 - elapsedSeconds);

  if (remainingSeconds === 0) {
    // Test has ended
    clearInterval(timer);
    showTestResult();
  }

  timerElement.textContent = `Time Remaining: ${remainingSeconds} seconds`;
}

// Function to calculate typing speed and accuracy
function calculateResult() {
  const typedWords = inputElement.value
    .split(/\s+/)
    .filter((word) => word !== "");
  totalWords = typedWords.length;

  for (let i = 0; i < Math.min(totalWords, sentences.split(" ").length); i++) {
    if (typedWords[i] === sentences.split(" ")[i]) {
      correctWords++;
    }
  }

  const speed = (correctWords / (30 / 60)).toFixed(2); // Speed in words per minute
  const accuracy = ((correctWords / totalWords) * 100).toFixed(2);

  speedSpan.textContent = speed;
  accuracySpan.textContent = accuracy;
}

// Function to display the test result
function showTestResult() {
  // Disable the input and start button
  inputElement.setAttribute("disabled", true);
  startButton.removeAttribute("disabled");

  // Display the result div
  resultDiv.style.display = "block";

  // Calculate and display typing speed and accuracy
  calculateResult();
}

// Event listener for the start button
startButton.addEventListener("click", startTest);

// Event listener for the retry button
retryButton.addEventListener("click", () => {
  // Reset the input field and result
  inputElement.value = "";
  resultDiv.style.display = "none";

  // Enable the start button
  startButton.removeAttribute("disabled");
});

// Initialize the application
inputElement.setAttribute("disabled", true);
resultDiv.style.display = "none";
sentenceElement.textContent = "";
