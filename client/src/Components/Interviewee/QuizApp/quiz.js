// export const quiz = {
//   questions: [
//     {
//       question: 'What is the capital of France?',
//       choices: ['London', 'Paris', 'Berlin', 'Madrid'],
//       correctAnswer: 'Paris'
//     },
//     {
//       question: 'Who painted the Mona Lisa?',
//       choices: ['Leonardo da Vinci', 'Michelangelo', 'Vincent van Gogh', 'Pablo Picasso'],
//       correctAnswer: 'Leonardo da Vinci'
//     },
//     {
//       question: 'What is the largest organ in the human body?',
//       choices: ['Brain', 'Heart', 'Liver', 'Skin'],
//       correctAnswer: 'Skin'
//     },
//     // add more questions here as needed
//   ]
// };


fetch('http://127.0.0.1:3000/quiz')
  .then(response => response.json())
  .then(data => {
    const quiz = {
      questions: data.questions
    };
    console.log(quiz); // this will log the quiz data to the console
  })
  .catch(error => console.error(error));
