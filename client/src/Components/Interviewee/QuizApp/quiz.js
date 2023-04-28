export const quiz = {
  questions: [
    {
      question: 'What is the capital of France?',
      choices: ['London', 'Paris', 'Berlin', 'Madrid'],
      correctchoices: 'Paris'
    },
    {
      question: 'Who painted the Mona Lisa?',
      choices: ['Leonardo da Vinci', 'Michelangelo', 'Vincent van Gogh', 'Pablo Picasso'],
      correctchoices: 'Leonardo da Vinci'
    },
    {
      question: 'What is the largest organ in the human body?',
      choices: ['Brain', 'Heart', 'Liver', 'Skin'],
      correctchoices: 'Skin'
    },
    {
      question: "What is the difference between a class and an object in Ruby?",
      choices: ["A class is a blueprint for creating objects, while an object is an instance of a class.", "A class is an instance of an object, while an object is a blueprint for creating classes.", "There is no difference between a class and an object in Ruby.", "A class is a type of object in Ruby."],
      correctchoices: "A class is a blueprint for creating objects, while an object is an instance of a class.",
    },
    {
      question: "What is the difference between a Proc and a lambda in Ruby?",
      choices: ["A Proc is a block of code that can be stored in a variable, while a lambda is a block of code that can be passed around like an object.",
      "There is no difference between a Proc and a lambda in Ruby.",
      "A Proc can be called with any number of arguments, while a lambda will raise an error if called with the wrong number of arguments.",
      "A Proc always returns a value, while a lambda returns nil if it doesn't explicitly return a value."],
      correctchoices: "A Proc can be called with any number of arguments, while a lambda will raise an error if called with the wrong number of arguments.",
    },
    {
        question: "What is the difference between a stack and a queue?",
        choices: ["A stack is a data structure that follows Last In, First Out (LIFO) principle, while a queue is a data structure that follows First In, First Out (FIFO) principle.",
        "A stack is a data structure that follows First In, First Out (FIFO) principle, while a queue is a data structure that follows Last In, First Out (LIFO) principle.",
        "There is no difference between a stack and a queue.",
        "A stack is used for breadth-first search, while a queue is used for depth-first search."],
        correctchoices: "A stack is a data structure that follows Last In, First Out (LIFO) principle, while a queue is a data structure that follows First In, First Out (FIFO) principle.",
    },
    {
        question: "Explain the difference between a binary search tree and a balanced binary search tree.",
        choices: ["A binary search tree is a data structure where each node has at most two child nodes and the left subtree contains only nodes with keys less than the parent node, while the right subtree contains only nodes with keys greater than the parent node. A balanced binary search tree is a binary search tree where the difference in height between the left and right subtrees of any node is at most 1.",
        "A binary search tree is a data structure where each node has at most one child node and the left subtree contains only nodes with keys greater than the parent node, while the right subtree contains only nodes with keys less than the parent node. A balanced binary search tree is a binary search tree where the difference in height between the left and right subtrees of any node is at most 1.",
        "There is no difference between a binary search tree and a balanced binary search tree.",
        "A binary search tree is a data structure where each node has at most two child nodes and the left subtree contains only nodes with keys greater than the parent node, while the right subtree contains only nodes with keys less than the parent node. A balanced binary search tree is a binary search tree where the difference in height between the left and right subtrees of any node is at most 2."],
        correctchoices: "A binary search tree is a data structure where each node has at most two child nodes and the left subtree contains only nodes with keys less than the parent node, while the right subtree contains only nodes with keys greater than the parent node. A balanced binary search tree is a binary search tree where the difference in height between the left and right subtrees of any node is at most 1.",
    },
    {
        question: "What is recursion and when should it be used?",
        choices: ["Recursion is a technique in which a function calls itself, and it should be used when a problem can be divided into smaller subproblems that can be solved using the same approach.",
        "Recursion is a technique in which a function calls another function, and it should be used when a problem can be solved using an iterative approach.",
        "There is no such thing as recursion in programming.",
        "Recursion is a technique in which a function calls itself, and it should be used when a problem can be solved using a loop."],
        correctchoices: "Recursion is a technique in which a function calls itself, and it should be used when a problem can be divided into smaller subproblems that can be solved using the same approach."
    },
  ]
};


// fetch("https://recruits.onrender.com/questions")
//   .then(response => response.json())
//   .then(data => {
//     const quiz = {
//       questions: data.questions
//     };
//     console.log(quiz); // this will log the quiz data to the console
//   })
//   .catch(error => console.error(error));
