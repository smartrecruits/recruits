class Question < ApplicationRecord
    belongs_to :recruiter
    has_many :responses
    # belongs_to :assessment

end
