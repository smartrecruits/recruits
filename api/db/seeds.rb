# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "WE ROLLING"

Recruiter.create(username: "recruiter1", email: "recruiter1@example.com", password: "password", firstname: "John", lastname: "Doe", company: "ABC Inc.")
Recruiter.create(username: "recruiter2", email: "recruiter2@example.com", password: "password", firstname: "Jane", lastname: "Smith", company: "XYZ Corp.")
Recruiter.create(username: "recruiter3", email: "recruiter3@example.com", password: "password", firstname: "Bob", lastname: "Johnson", company: "123 LLC")

Interviewee.create(username: "recruiter1", email: "recruiter1@example.com", password: "password", firstname: "John", lastname: "Doe", bio: "ABC Inc.")
Interviewee.create(username: "recruiter2", email: "recruiter2@example.com", password: "password", firstname: "Jane", lastname: "Smith", bio: "XYZ Corp.")
Interviewee.create(username: "recruiter3", email: "recruiter3@example.com", password: "password", firstname: "Bob", lastname: "Johnson", bio: "123 LLC")

questions = [
    {
      content: "What is the difference between a class and an object in Ruby?",
      answer_1: "A class is a blueprint for creating objects, while an object is an instance of a class.",
      answer_2: "A class is an instance of an object, while an object is a blueprint for creating classes.",
      answer_3: "There is no difference between a class and an object in Ruby.",
      answer_4: "A class is a type of object in Ruby.",
      correct_answer: "A class is a blueprint for creating objects, while an object is an instance of a class.",
    },
    {
      content: "What is the difference between a Proc and a lambda in Ruby?",
      answer_1: "A Proc is a block of code that can be stored in a variable, while a lambda is a block of code that can be passed around like an object.",
      answer_2: "There is no difference between a Proc and a lambda in Ruby.",
      answer_3: "A Proc can be called with any number of arguments, while a lambda will raise an error if called with the wrong number of arguments.",
      answer_4: "A Proc always returns a value, while a lambda returns nil if it doesn't explicitly return a value.",
      correct_answer: "A Proc can be called with any number of arguments, while a lambda will raise an error if called with the wrong number of arguments.",
    },
    {
        content: "What is the difference between a stack and a queue?",
        answer_1: "A stack is a data structure that follows Last In, First Out (LIFO) principle, while a queue is a data structure that follows First In, First Out (FIFO) principle.",
        answer_2: "A stack is a data structure that follows First In, First Out (FIFO) principle, while a queue is a data structure that follows Last In, First Out (LIFO) principle.",
        answer_3: "There is no difference between a stack and a queue.",
        answer_4: "A stack is used for breadth-first search, while a queue is used for depth-first search.",
        correct_answer: "A stack is a data structure that follows Last In, First Out (LIFO) principle, while a queue is a data structure that follows First In, First Out (FIFO) principle.",
    },
    {
        content: "Explain the difference between a binary search tree and a balanced binary search tree.",
        answer_1: "A binary search tree is a data structure where each node has at most two child nodes and the left subtree contains only nodes with keys less than the parent node, while the right subtree contains only nodes with keys greater than the parent node. A balanced binary search tree is a binary search tree where the difference in height between the left and right subtrees of any node is at most 1.",
        answer_2: "A binary search tree is a data structure where each node has at most one child node and the left subtree contains only nodes with keys greater than the parent node, while the right subtree contains only nodes with keys less than the parent node. A balanced binary search tree is a binary search tree where the difference in height between the left and right subtrees of any node is at most 1.",
        answer_3: "There is no difference between a binary search tree and a balanced binary search tree.",
        answer_4: "A binary search tree is a data structure where each node has at most two child nodes and the left subtree contains only nodes with keys greater than the parent node, while the right subtree contains only nodes with keys less than the parent node. A balanced binary search tree is a binary search tree where the difference in height between the left and right subtrees of any node is at most 2.",
        correct_answer: "A binary search tree is a data structure where each node has at most two child nodes and the left subtree contains only nodes with keys less than the parent node, while the right subtree contains only nodes with keys greater than the parent node. A balanced binary search tree is a binary search tree where the difference in height between the left and right subtrees of any node is at most 1.",
    },
    {
        content: "What is recursion and when should it be used?",
        answer_1: "Recursion is a technique in which a function calls itself, and it should be used when a problem can be divided into smaller subproblems that can be solved using the same approach.",
        answer_2: "Recursion is a technique in which a function calls another function, and it should be used when a problem can be solved using an iterative approach.",
        answer_3: "There is no such thing as recursion in programming.",
        answer_4: "Recursion is a technique in which a function calls itself, and it should be used when a problem can be solved using a loop.",
        correct_answer: "Recursion is a technique in which a function calls itself, and it should be used when a problem can be divided into smaller subproblems that can be solved using the same approach."
    },
    {
        content: "How would you optimize a website's loading time?",
        answer_1: "Minimize the number of HTTP requests, optimize images and other media, and reduce the size of files.",
        answer_2: "Add more content to the website to make it more engaging.",
        answer_3: "Increase the font size and add more whitespace to make the website easier to read.",
        answer_4: "Use a lot of animations and graphics to make the website more visually appealing.",
        correct_answer: "Minimize the number of HTTP requests, optimize images and other media, and reduce the size of files"
    },
    {
        content: "Describe the difference between synchronous and asynchronous programming.",
        answer_1: "Synchronous programming means that code is executed sequentially and the program waits for each operation to complete before moving on to the next one. Asynchronous programming means that code can be executed concurrently and the program does not wait for each operation to complete before moving on to the next one.",
        answer_2: "Synchronous programming is slower than asynchronous programming.",
        answer_3: "Asynchronous programming is slower than synchronous programming.",
        answer_4: "Synchronous programming is used for small applications, while asynchronous programming is used for larger applications.",
        correct_answer: "Synchronous programming means that code is executed sequentially and the program waits for each operation to complete before moving on to the next one. Asynchronous programming means that code can be executed concurrently and the program does not wait for each operation to complete before moving on to the next one.",
    },
    {
        content: "What is the purpose of object-oriented programming?",
        answer_1: "The purpose of object-oriented programming is to simplify code and make it easier to maintain.",
        answer_2: "The purpose of object-oriented programming is to make code run faster.",
        answer_3: "The purpose of object-oriented programming is to make code more difficult to read.",
        answer_4: "The purpose of object-oriented programming is to make code more modular and reusable.",
        correct_answer: "The purpose of object-oriented programming is to make code more modular and reusable.",
    },
    {
        content: "Explain how polymorphism works in object-oriented programming.",
        answer_1: "Polymorphism is the ability of an object to take on many forms. In object-oriented programming, this means that an object can be used as an instance of its class or as an instance of any subclass of its class.",
        answer_2: "Polymorphism is the ability of an object to only take on one form.",
        answer_3: "Polymorphism is the ability of an object to take on many forms, but only within its own class.",
        answer_4: "Polymorphism is the ability of an object to take on many forms, but only within its own subclass.",
        correct_answer: "Polymorphism is the ability of an object to take on many forms. In object-oriented programming, this means that an object can be used as an instance of its class or as an instance of any subclass of its class.",
    },
    {
        content: "What is a closure in JavaScript?",
        answer_1: "A closure is a function that returns another function.",
        answer_2: "A closure is a function that can be called from anywhere in the program.",
        answer_3: "A closure is a variable that can be accessed from anywhere in the program.",
        answer_4: "A closure is a function that has access to the variables in its outer function, even after the outer function has returned.",
        correct_answer: "A closure is a function that has access to the variables in its outer function, even after the outer function has returned.",
    },   
    {
        content: "What is the difference between an inner join and an outer join in SQL?",
        answer_1: "An inner join only returns the rows where there is a match in both tables being joined, while an outer join returns all the rows from both tables and fills in nulls for any missing values.",
        answer_2: "An inner join returns all the rows from both tables and fills in nulls for any missing values, while an outer join only returns the rows where there is a match in both tables being joined.",
        answer_3: "An inner join only returns the rows where there is a match in the first table being joined, while an outer join returns all the rows from the first table and fills in nulls for any missing values in the second table.",
        answer_4: "An outer join only returns the rows where there is a match in the first table being joined, while an inner join returns all the rows from the first table and fills in nulls for any missing values in the second table.",
        correct_answer: "An inner join only returns the rows where there is a match in both tables being joined, while an outer join returns all the rows from both tables and fills in nulls for any missing values."
    },
    {
        content: "How do you ensure that your code is secure?",
        answer_1: "Use secure coding practices like input validation, output encoding, and parameterized queries.",
        answer_2: "Store all data in plain text to avoid any potential data loss.",
        answer_3: "Use the latest version of all libraries and frameworks, even if they have known vulnerabilities.",
        answer_4: "Don't worry about security, it's the job of the IT department.",
        correct_answer: "Use secure coding practices like input validation, output encoding, and parameterized queries."
    },
    {
        content: "What is the difference between a cookie and a session?",
        answer_1: "A cookie is stored on the client-side and can be read by both the client and the server, while a session is stored on the server-side and can only be read by the server.",
        answer_2: "A cookie is stored on the server-side and can only be read by the server, while a session is stored on the client-side and can be read by both the client and the server.",
        answer_3: "A cookie and a session are the same thing and can be used interchangeably.",
        answer_4: "A cookie is used for HTTP requests, while a session is used for HTTPS requests.",
        correct_answer: "A cookie is stored on the client-side and can be read by both the client and the server, while a session is stored on the server-side and can only be read by the server."
    },
    {
        content: "Explain what is meant by the term 'scalability' in software engineering.",
        answer_1: "Scalability refers to the ability of a system to handle increasing amounts of work without negatively impacting performance.",
        answer_2: "Scalability refers to the ability of a system to be able to scale vertically, increasing the size of the system's hardware.",
        answer_3: "Scalability refers to the ability of a system to be able to scale horizontally, increasing the number of systems in a distributed environment.",
        answer_4: "Scalability refers to the ability of a system to be able to scale both vertically and horizontally.",
        correct_answer: "Scalability refers to the ability of a system to handle increasing amounts of work without negatively impacting performance."
    },    
    {
        content: "What is the difference between a web server and an application server?",
        answer_1: "A web server serves static web content, while an application server is responsible for dynamic web content and application logic.",
        answer_2: "There is no difference between a web server and an application server.",
        answer_3: "A web server can only handle HTTP requests, while an application server can handle a variety of protocols.",
        answer_4: "An application server is used for development, while a web server is used for production.",
        correct_answer: "A web server serves static web content, while an application server is responsible for dynamic web content and application logic."
    },
    {
        content: "How do you handle errors in your code?",
        answer_1: "I use try-catch blocks to handle errors and exceptions.",
        answer_2: "I use print statements to debug my code.",
        answer_3: "I use unit tests to catch errors before they happen.",
        answer_4: "I don't handle errors in my code.",
        correct_answer: "I use try-catch blocks to handle errors and exceptions."
    },
    {
        content: "What is the difference between a compile-time error and a runtime error?",
        answer_1: "Compile-time errors occur during runtime, while runtime errors occur during compilation.",
        answer_2: "There is no difference between a compile-time error and a runtime error.",
        answer_3: "Compile-time errors are syntax errors that are caught during compilation, while runtime errors are errors that occur during program execution.",
        answer_4: "Runtime errors are syntax errors that are caught during compilation, while compile-time errors are errors that occur during program execution.",
        correct_answer: "Compile-time errors are syntax errors that are caught during compilation, while runtime errors are errors that occur during program execution."
    },
    {
        content: "Explain the concept of 'garbage collection' in programming.",
        answer_1: "Garbage collection is the process of manually freeing up memory in your program.",
        answer_2: "Garbage collection is a feature of compiled languages only.",
        answer_3: "Garbage collection is the automatic process of freeing up memory in your program by removing objects that are no longer being used.",
        answer_4: "Garbage collection is the process of optimizing your code to use less memory.",
        correct_answer: "Garbage collection is the automatic process of freeing up memory in your program by removing objects that are no longer being used."
    },
    {
        content: "What is a mutex and when should it be used?",
        answer_1: "A mutex is a type of data structure used for storing large amounts of data.",
        answer_2: "A mutex is a type of algorithm used for sorting arrays.",
        answer_3: "A mutex is a synchronization primitive used to ensure that only one thread can access a shared resource at a time.",
        answer_4: "A mutex is a type of database used for storing key-value pairs.",
        correct_answer: "A mutex is a synchronization primitive used to ensure that only one thread can access a shared resource at a time."
    },      
    {
        content: "Explain the difference between a linked list and an array.",
        answer_1: "An array is a data structure that stores a fixed-size sequential collection of elements of the same type, whereas a linked list is a data structure that consists of a collection of nodes, each containing a value and a reference to the next node in the sequence.",
        answer_2: "An array can be accessed randomly with constant time complexity, whereas accessing an element in a linked list requires traversing the list and has linear time complexity.",
        answer_3: "Adding or removing elements from an array requires shifting all the subsequent elements, while in a linked list, adding or removing an element only requires updating the next reference of the previous node.",
        answer_4: "Arrays have a fixed size, while linked lists can grow or shrink dynamically as elements are added or removed.",
        correct_answer: "Adding or removing elements from an array requires shifting all the subsequent elements, while in a linked list, adding or removing an element only requires updating the next reference of the previous node.",
    }      
  ]
  recruiter_ids = [1, 2, 3]

  questions.each do |q|
    q[:recruiter_id] = recruiter_ids.sample
    Question.create!(q)
  end

  4.times do |n|
    Assessment.create!(
      recruiter_id: Recruiter.first.id,
      name: "trial #{n+1}",
      duedate: nil,
    )
  end

  Assessment.create!(recruiter_id: Recruiter.first.id, name: "trial done", duedate: Date.today + 1.days , done: true, quizdone: true, codedone: true , reviewed: false)
  Invite.create!(status: "accepted", interviewee_id: 1, assessment_id: 1, recruiter_id:1)
  puts "OVER AND OUT"