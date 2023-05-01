# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_25_193623) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.text "content"
    t.string "feedback"
    t.integer "grades"
    t.integer "code_challenge_id"
    t.integer "assessment_id"
    t.integer "interviewee_id"
    t.boolean "done"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "assessments", force: :cascade do |t|
    t.bigint "recruiter_id", null: false
    t.string "name"
    t.boolean "accepted", default: false
    t.datetime "duedate"
    t.boolean "reviewed", default: false
    t.boolean "done", default: false
    t.boolean "quizdone", default: false
    t.boolean "codedone", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recruiter_id"], name: "index_assessments_on_recruiter_id"
  end

  create_table "assessments_code_challenges", force: :cascade do |t|
    t.bigint "code_challenge_id", null: false
    t.bigint "assessment_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assessment_id"], name: "index_assessments_code_challenges_on_assessment_id"
    t.index ["code_challenge_id"], name: "index_assessments_code_challenges_on_code_challenge_id"
  end

  create_table "assessments_questions", force: :cascade do |t|
    t.bigint "question_id", null: false
    t.bigint "assessment_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assessment_id"], name: "index_assessments_questions_on_assessment_id"
    t.index ["question_id"], name: "index_assessments_questions_on_question_id"
  end

  create_table "code_challenges", force: :cascade do |t|
    t.string "name"
    t.string "languages"
    t.string "description"
    t.integer "totalAttempts"
    t.integer "totalCompleted"
    t.string "codewars_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "interviewees", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "firstname"
    t.string "lastname"
    t.string "bio"
    t.string "skills"
    t.integer "grades"
    t.string "image", default: "data:image/png;base64,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"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "invites", force: :cascade do |t|
    t.bigint "interviewee_id", null: false
    t.bigint "recruiter_id", null: false
    t.integer "assessment_id"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["interviewee_id"], name: "index_invites_on_interviewee_id"
    t.index ["recruiter_id"], name: "index_invites_on_recruiter_id"
  end

  create_table "questions", force: :cascade do |t|
    t.text "content"
    t.string "answer_1"
    t.string "answer_2"
    t.string "answer_3"
    t.string "answer_4"
    t.string "correct_answer"
    t.integer "totalAttempts"
    t.integer "recruiter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "recruiters", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "firstname"
    t.string "lastname"
    t.string "company"
    t.string "image", default: "https://iglu.net/wp-content/uploads/2022/08/Game-Programmer-768x511.png"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "responses", force: :cascade do |t|
    t.bigint "question_id", null: false
    t.bigint "interviewee_id", null: false
    t.integer "assessment_id"
    t.string "chosen_answer"
    t.string "feedback"
    t.integer "grades"
    t.boolean "correct"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["interviewee_id"], name: "index_responses_on_interviewee_id"
    t.index ["question_id"], name: "index_responses_on_question_id"
  end

  create_table "statistics", force: :cascade do |t|
    t.integer "total_questions"
    t.integer "total_interviewees"
    t.integer "total_responses"
    t.integer "correct_responses"
    t.float "average_score"
    t.integer "highest_score"
    t.integer "lowest_score"
    t.integer "total_code_challenges"
    t.integer "answers_average"
    t.integer "num_interviewees"
    t.integer "num_attempts"
    t.integer "num_incorrect"
    t.integer "num_correct"
    t.integer "num_completed"
    t.string "code_challenge"
    t.string "question"
    t.float "avg_grade"
    t.float "pct_completed"
    t.float "pct_correct"
    t.integer "code_challenge_stats"
    t.integer "question_stats"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "assessments", "recruiters"
  add_foreign_key "assessments_code_challenges", "assessments"
  add_foreign_key "assessments_code_challenges", "code_challenges"
  add_foreign_key "assessments_questions", "assessments"
  add_foreign_key "assessments_questions", "questions"
  add_foreign_key "invites", "interviewees"
  add_foreign_key "invites", "recruiters"
  add_foreign_key "responses", "interviewees"
  add_foreign_key "responses", "questions"
end
