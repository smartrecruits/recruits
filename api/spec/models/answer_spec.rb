require 'rails_helper'

RSpec.describe Answer, type: :model do
  describe "validations" do
    it { should validate_presence_of(:content) }
  end

  describe "associations" do
    it { should belong_to(:question) }
    it { should belong_to(:assessment) }
    it { should belong_to(:interviewee) }
  end
end
