// Main function to retrieve and display the weather
//Asynchronously retreives weather and displays it
async function getAndDisplayWeather() {
  const newWeather = await retrieveWeather();
  displayWeather(newWeather);
}

// Function to retrieve the weather
async function retrieveWeather() {
  //Send GET request to the API. Await the response
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=53.4809&longitude=-2.2374&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=GMT",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  //Check if response failed, if so log an error and halt the app
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }

  //return the parsed JSON from the response (which contains question object)
  const data = await response.json();
  return data;
}

// Function to update the DOM with the provided weather details and set intial color (to hide answer) and image.
function displayWeather(newWeather) {
  console.log(newWeather);
  const para1Element = document.getElementById("p1");
  para1Element.textContent = `Date: ${newWeather.daily["time"][0]}`;
  const para3Element = document.getElementById("p3");
  para3Element.textContent = `Min. Temp: ${newWeather.daily["temperature_2m_min"][0]} celcius`;
  const para4Element = document.getElementById("p4");
  para4Element.textContent = `Max. Temp: ${newWeather.daily["temperature_2m_max"][0]} celcius`;
  const para5Element = document.getElementById("p5");
  if (
    newWeather.daily["weathercode"][0] == 80 ||
    newWeather.daily["weathercode"][0] == 81 ||
    newWeather.daily["weathercode"][0] == 82
  ) {
    para5Element.textContent = "Today's forecast: Rain Showers!";
    weatherPhoto = getElementById("weatherStripe");
    weatherPhoto.setAttribute("background", url("bubbles.jpeg"));
  } else if (newWeather.daily["weathercode"][0] == 0) {
    para5Element.textContent = "Today's forecast: Clear skies!";
  } else if (
    newWeather.daily["weathercode"][0] == 1 ||
    newWeather.daily["weathercode"][0] == 2
  ) {
    para5Element.textContent =
      "Today's forecast: Mainly clear, partly cloudy, and overcast";
  } else if (newWeather.daily["weathercode"][0] == 63 || newWeather.daily["weathercode"][0] == 61 || newWeather.daily["weathercode"][0] == 65){
    para5Element.textContent = "Rain: Slight, moderate and heavy intensity"
  }
}

addEventListener("load", getAndDisplayWeather);

const d = new Date();
let hour = d.getHours();
function displayTime(newTime) {
  const para10Element = document.getElementById("p10");
  para10Element.textContent = `Date: ${d} Time: ${hour}`;
}

addEventListener("load", displayTime);

//QUIZ section

// Main function to retrieve and display the question
//Asynchronously retreives question and displays it
async function getAndDisplayQuestion() {
  const quizQuestion = await retrieveQuestion();
  displayQuestion(quizQuestion);
  function playSound() {
    var audio = document.getElementById("introAudio");
    audio.play();
  }
  playSound();
}

// Function to retrieve the question
async function retrieveQuestion() {
  //Send GET request to the API. Await the response
  const response = await fetch(
    "https://opentdb.com/api.php?amount=2&type=boolean",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  //Check if response failed, if so log an error and halt the app
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }

  //return the parsed JSON from the response (which contains question object)
  const data = await response.json();
  return data;
}

//test retrieveQuestion with console.log();
//console.log(retrieveQuestion);

// Function to update the DOM with the provided question details and set intial color (to hide answer) and image.
function displayQuestion(quizQuestion) {
  const quiz1Element = document.getElementById("quiz1");
  quiz1Element.textContent = `Category: ${quizQuestion.results[0].category}`;
  const quiz2Element = document.getElementById("quiz2");
  quiz2Element.textContent = `Difficulty: ${quizQuestion.results[0].difficulty}`;
  const quiz3Element = document.getElementById("quiz3");
  quiz3Element.innerHTML = `Question: ${quizQuestion.results[0].question}`;
  const quiz4Element = document.getElementById("quiz4");
  quiz4Element.textContent = `Answer: ${quizQuestion.results[0].correct_answer}`;
  quiz4Element.setAttribute("style", "opacity:0%")
}

//getAndDisplayQuestion()

//add event listener to give new question when button clicked
const questionButton = document.getElementById("newQButton");
questionButton.addEventListener("click", getAndDisplayQuestion);

//add event listener to reveal answer when button clicked
const ansButton = document.getElementById("quizAns");
const quiz4Element = document.getElementById("quiz4");
function changeColor(){
  quiz4Element.setAttribute("style", "opacity:100%")

}
ansButton.addEventListener("click", changeColor);
