class AssessmentReview {
  constructor(assessment, interviewees) {
    this.assessment = assessment;
    this.interviewees = interviewees;
  }

  getStatistics() {
    const answerCounts = {};
    const correctCounts = {};
    const totalInterviewees = this.interviewees.length;
    let totalAnswers = 0;
    let totalCorrect = 0;

    this.interviewees.forEach(interviewee => {
      const answers = interviewee.answers;

      Object.keys(answers).forEach(questionId => {
        const answer = answers[questionId];
        const correctAnswer = this.assessment.questions.find(question => question.id === questionId).answer;

        answerCounts[questionId] = (answerCounts[questionId] || 0) + 1;
        correctCounts[questionId] = (correctCounts[questionId] || 0) + (answer === correctAnswer ? 1 : 0);
        totalAnswers++;
        totalCorrect += answer === correctAnswer ? 1 : 0;
      });
    });

    const questionStats = Object.keys(answerCounts).map(questionId => {
      const correct = correctCounts[questionId] || 0;
      const total = answerCounts[questionId] || 0;
      const percentage = total === 0 ? 0 : Math.round(correct / total * 100);
      return {
        questionId,
        correct,
        total,
        percentage
      };
    });

    const overallStats = {
      totalInterviewees,
      totalAnswers,
      totalCorrect,
      percentageCorrect: totalAnswers === 0 ? 0 : Math.round(totalCorrect / totalAnswers * 100)
    };

    return { questionStats, overallStats };
  }

  viewIntervieweeAnswers(intervieweeId) {
    const interviewee = this.interviewees.find(interviewee => interviewee.id === intervieweeId);
    if (!interviewee) {
      console.log('Interviewee not found');
      return;
    }

    const questionAnswers = interviewee.answers;
    const questions = this.assessment.questions;
    const answers = questions.map(question => {
      const answer = questionAnswers[question.id];
      const isCorrect = answer === question.answer;
      return {
        question: question.prompt,
        answer,
        isCorrect
      };
    });

    console.log(`Answers for interviewee ${intervieweeId}:`);
    console.table(answers);
  }

  publishAssessment() {
    // Code to publish the assessment, e.g. save the assessment results to a database
    console.log('Publishing assessment...');
  }
}

// Example usage
const myAssessment = new Assessment([
  { id: 'q1', prompt: 'What is the capital of France?', options: ['Paris', 'Rome', 'Madrid', 'Berlin'], answer: 'Paris' },
  { id: 'q2', prompt: 'What is the capital of Japan?', options: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima'], answer: 'Tokyo' }
]);

const interviewees = [
  {
    id: 'interviewee1',
    name: 'Alice',
    answers: {
      'q1': 'Paris',
      'q2': 'Kyoto'
    }
  },
  {
    id: 'interviewee2',
    name: 'Bob',
    answers: {
      'q1': 'Paris',
      'q2': 'Tokyo'
    }
  }
];

const assessmentReview = new
