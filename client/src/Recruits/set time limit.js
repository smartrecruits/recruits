class Assessment {
    constructor(questions) {
      this.questions = questions;
      this.answers = {};
      this.timeLimit = null;
    }
  
    setTimeLimit(timeLimit) {
      this.timeLimit = new Date(timeLimit);
      setTimeout(() => {
        this.submitAssessment();
      }, this.timeLimit - new Date());
    }
  
    submitAssessment() {
      // Code to submit the assessment, e.g. send the answers to a server
      console.log('Submitting assessment...');
    }
  
    answerQuestion(questionId, answer) {
      // Code to save the answer to the assessment
      this.answers[questionId] = answer;
    }
  }
  
  // Example usage
  const myAssessment = new Assessment([
    { id: 'q1', prompt: 'What is the capital of France?', options: ['Paris', 'Rome', 'Madrid', 'Berlin'], answer: 'Paris' },
    { id: 'q2', prompt: 'What is the capital of Japan?', options: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima'], answer: 'Tokyo' }
  ]);
  
  myAssessment.setTimeLimit('2023-05-01T00:30:00.000Z'); // Set time limit to 30 minutes from now
  
  myAssessment.answerQuestion('q1', 'Paris'); // Answer question 1
  myAssessment.answerQuestion('q2', 'Tokyo'); // Answer question 2
  
  // Wait for the time limit to expire (30 minutes from now)
  // After 30 minutes, the assessment should be automatically submitted
  