class StatisticsController < ApplicationController

    def show
        assessment = Assessment.find(params[:id])
        interviewees = assessment.interviewees
        statistics = {}
    
        interviewees.each do |interviewee|
          interviewee_answers = interviewee.answers.where(assessment_id: assessment.id)
          interviewee_code_challenges = interviewee.code_challenges.where(assessment_id: assessment.id)
    
          total_questions = assessment.questions.count
          total_correct_questions = interviewee_answers.where(correct: true).count
          total_code_challenges = assessment.code_challenges.count
          total_completed_code_challenges = interviewee_code_challenges.where(completed: true).count
    
          statistics[interviewee.username] = {
            total_questions: total_questions,
            total_correct_questions: total_correct_questions,
            total_code_challenges: total_code_challenges,
            total_completed_code_challenges: total_completed_code_challenges
          }
        end
    
        render json: { assessment_statistics: statistics }
    end

    # Define a method to calculate the statistics for an assessment and return the results
def get_statistics_for_assessment
    # Get the assessment object
    assessment = Assessment.find(assessment_id)
  
    # Get all the questions and code challenges associated with the assessment
    questions = assessment.questions
    code_challenges = assessment.code_challenges
  
    # Get all the interviewees who have completed the assessment
    interviewees = assessment.invites.where(status: 'completed').map(&:interviewee)
  
    # Calculate statistics for each question
    question_stats = questions.map do |question|
      # Get all responses for the question
      responses = question.responses.where(interviewee_id: interviewees.map(&:id))
  
      # Calculate the number of correct and incorrect responses
      num_correct = responses.select(&:correct).count
      num_incorrect = responses.count - num_correct
  
      # Calculate the percentage of correct responses
      pct_correct = num_correct.to_f / responses.count * 100
  
      # Return a hash with the question and its statistics
      {
        question: question.content,
        num_correct: num_correct,
        num_incorrect: num_incorrect,
        pct_correct: pct_correct.round(2)
      }
    end
  
    # Calculate statistics for each code challenge
    code_challenge_stats = code_challenges.map do |code_challenge|
      # Get all answers for the code challenge
      answers = code_challenge.answers.where(interviewee_id: interviewees.map(&:id))
  
      # Calculate the average grade for the code challenge
      avg_grade = answers.average(:grades)
  
      # Calculate the number of attempts and completions for the code challenge
      num_attempts = code_challenge.totalAttempts
      num_completed = code_challenge.totalCompleted
  
      # Calculate the percentage of completions
      pct_completed = num_completed.to_f / num_attempts * 100
  
      # Return a hash with the code challenge and its statistics
      {
        code_challenge: code_challenge.name,
        avg_grade: avg_grade.round(2),
        num_attempts: num_attempts,
        num_completed: num_completed,
        pct_completed: pct_completed.round(2)
      }
    end
  
    # Return a hash with the assessment and its statistics
    {
      assessment: assessment.name,
      num_interviewees: interviewees.count,
      question_stats: question_stats,
      code_challenge_stats: code_challenge_stats
    }
  end
    
end
