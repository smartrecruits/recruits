class QuestionSerializer < ActiveModel::Serializer
<<<<<<< HEAD
  attributes :id, :content, :question, :feedback, :assessment_id, :created_at, :updated_at
=======
  attributes :id, :question, :content, :answers, :feedback, :assessment_id, :created_at, :updated_at
  has_many :answers
>>>>>>> d5cab90122950c5f6c8e24951b2644b2a3b32c5f
end
