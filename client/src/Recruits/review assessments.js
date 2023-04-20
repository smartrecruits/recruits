class AssessmentResult {
    constructor(assessment, interviewee, answers) {
      this.assessment = assessment;
      this.interviewee = interviewee;
      this.answers = answers;
      this.grade = null;
    }
  }
  
  class AssessmentReview {
    constructor(assessmentResults) {
      this.assessmentResults = assessmentResults;
    }
  
    publishAssessment() {
      // Publish the assessment results
    }
  
    viewStatistics() {
      // Display statistics of the answers and Interviewees’ performance
    }
  
    viewIntervieweeAnswers(interviewee) {
      // Display an Interviewee’s answers
    }
  }
  