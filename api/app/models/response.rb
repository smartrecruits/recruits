class Response < ApplicationRecord
  belongs_to :question
  belongs_to :interviewee
  belongs_to :assessment
   
  def mark_as_correct
    self.correct = true if chosen_answer == question.correct_answer
    save
  end
end
