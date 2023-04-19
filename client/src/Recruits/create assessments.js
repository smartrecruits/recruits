class Assessment {
  constructor(name) {
    this.name = name;
    this.questions = [];
  }

  addQuestion(question) {
    this.questions.push(question);
  }
}

class Question {
  constructor(prompt, answerType) {
    this.prompt = prompt;
    this.answerType = answerType;
  }
}

class MultipleChoice extends Question {
  constructor(prompt, choices) {
    super(prompt, 'Multiple Choice');
    this.choices = choices;
  }
}

class FreeText extends Question {
  constructor(prompt) {
    super(prompt, 'Free Text');
  }
}

class CodingChallenge extends Question {
  constructor(prompt, testCases) {
    super(prompt, 'Coding Challenge');
    this.testCases = testCases;
  }
}
