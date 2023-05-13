
// let questions = document.querySelector("#questions");
// import { shuffle } from "lodash";
// fetching the data from the API
    let url = "https://the-trivia-api.com/api/questions?categories=general_knowledge,food_and_drink,science&limit=10&region=PK&difficulty=medium";
    fetch(url)
    .then((response) => response.json())
    .then((data) => {


            // select  random question from data and display it on the page
            let randomQuestion = Math.floor(Math.random() * data.length);
            // let ques = data[randomQuestion].question;
            // display random order of answers of the questions
         
            let correctAnswer = data.correct_answer;
            console.log(correctAnswer);
            // document.querySelector("#questions").innerHTML += ` ${ques}<br>`;
            // document.querySelector("#ans1").innerHTML += `${answers[0]}<br>`;
            // document.querySelector("#ans2").innerHTML += `${answers[1]}<br>`;
            // document.querySelector("#ans3").innerHTML += `${answers[2]}<br>`;
            // document.querySelector("#ans4").innerHTML += `${answers[3]}<br>`;

    
        
    });

