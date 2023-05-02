class Feedback {
    constructor(question, answer, comment) {
      this.question = question;
      this.answer = answer;
      this.comment = comment;
    }
  }
  
  class AssessmentFeedback {
    constructor(assessment, feedbacks, timeLimit) {
      this.assessment = assessment;
      this.feedbacks = feedbacks;
      this.timeLimit = timeLimit;
    }
  
    addFeedback(question, answer, comment) {
      const feedback = new Feedback(question, answer, comment);
      this.feedbacks.push(feedback);
    }
  
    setTimeLimit(timeLimit) {
      this.timeLimit = timeLimit;
    }
  }
  