class Grade {
    constructor(interviewee, score) {
      this.interviewee = interviewee;
      this.score = score;
    }
  }
  
  class GradeList {
    constructor() {
      this.grades = [];
    }
  
    addGrade(grade) {
      this.grades.push(grade);
    }
  }
  