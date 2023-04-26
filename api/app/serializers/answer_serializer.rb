class AnswerSerializer < ActiveModel::Serializer
  attributes :id,:interviewee_id,:grades, :content, :feedback, :assessment_id, :created_at, :updated_at, :answer
  has_one :code_challenge
  def answer
    # Map the answers to the format specified in the question payload
    object.answers.map.with_index do |answer, index|
      { "answer#{index + 1}": answer.content }
    end
  end
end
