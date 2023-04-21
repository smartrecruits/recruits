class Question < ApplicationRecord
   belongs_to :recruiter
   has_many :answers

    validates :content, presence: true

end
