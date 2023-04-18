require 'test_helper'

class AnswerTest < ActiveSupport::TestCase
  test "should not save answer without content" do
    answer = Answer.new
    assert_not answer.save, "Saved the answer without content"
  end

  test "should save answer with all required attributes" do
    question = Question.create(content: "What is your name?")
    assessment = Assessment.create(name: "Test Assessment")
    interviewee = Interviewee.create(name: "Test Interviewee")
    answer = Answer.new(content: "My name is John", question: question, assessment: assessment, interviewee: interviewee)
    assert answer.save, "Failed to save answer with all required attributes"
  end
end
