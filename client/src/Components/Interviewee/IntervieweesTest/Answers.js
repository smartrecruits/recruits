import React, { useState } from 'react';

function AnswerForm({ question }) {
  const [chosenAnswer, setChosenAnswer] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
        const response1 = await fetch(`/questions/${question.id}/check_answer`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ chosen_answer: chosenAnswer })
        });
        const data1 = await response1.json();
        // handle response data1
    
        const response2 = await fetch(`/responses`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ chosen_answer: chosenAnswer })
        });
        const data2 = await response2.json();
        // handle response data2
    
      } catch (error) {
        // handle error
      }
    
  }

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit}>
      <div className="field">
        <input
          type="radio"
          name="chosen_answer"
          value={question.answer_1}
          checked={chosenAnswer === question.answer_1}
          onChange={event => setChosenAnswer(event.target.value)}
        />
        <label>{question.answer_1}</label>
      </div>

      <div className="field">
        <input
          type="radio"
          name="chosen_answer"
          value={question.answer_2}
          checked={chosenAnswer === question.answer_2}
          onChange={event => setChosenAnswer(event.target.value)}
        />
        <label>{question.answer_2}</label>
      </div>

      <div className="field">
        <input
          type="radio"
          name="chosen_answer"
          value={question.answer_3}
          checked={chosenAnswer === question.answer_3}
          onChange={event => setChosenAnswer(event.target.value)}
        />
        <label>{question.answer_3}</label>
      </div>

      <div className="field">
        <input
          type="radio"
          name="chosen_answer"
          value={question.answer_4}
          checked={chosenAnswer === question.answer_4}
          onChange={event => setChosenAnswer(event.target.value)}
        />
        <label>{question.answer_4}</label>
      </div>

      <div className="actions">
        <button type="submit">Submit</button>
      </div>
    </form>
=======
    <div>
      <p>{question.content}</p>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="radio"
            name="chosen_answer"
            value={question.answer_1}
            checked={chosenAnswer === question.answer_1}
            onChange={event => setChosenAnswer(event.target.value)}
          />
          <label>{question.answer_1}</label>
        </div>

        <div className="field">
          <input
            type="radio"
            name="chosen_answer"
            value={question.answer_2}
            checked={chosenAnswer === question.answer_2}
            onChange={event => setChosenAnswer(event.target.value)}
          />
          <label>{question.answer_2}</label>
        </div>

        <div className="field">
          <input
            type="radio"
            name="chosen_answer"
            value={question.answer_3}
            checked={chosenAnswer === question.answer_3}
            onChange={event => setChosenAnswer(event.target.value)}
          />
          <label>{question.answer_3}</label>
        </div>

        <div className="field">
          <input
            type="radio"
            name="chosen_answer"
            value={question.answer_4}
            checked={chosenAnswer === question.answer_4}
            onChange={event => setChosenAnswer(event.target.value)}
          />
          <label>{question.answer_4}</label>
        </div>

        <div className="actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
>>>>>>> 414f75b85a659bea1794718aefe85884bcf7cdf0
  );
}

export default AnswerForm