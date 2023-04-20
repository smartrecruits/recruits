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

ActiveRecord::Schema[7.0].define(version: 2023_04_20_111420) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.text "content"
    t.integer "question_id"
    t.integer "assessment_id"
    t.integer "interviewee_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "assessments", force: :cascade do |t|
    t.bigint "interviewee_id", null: false
    t.bigint "recruiter_id", null: false
    t.string "name"
    t.boolean "accepted"
    t.datetime "duedate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["interviewee_id"], name: "index_assessments_on_interviewee_id"
    t.index ["recruiter_id"], name: "index_assessments_on_recruiter_id"
  end

  create_table "code_challenges", force: :cascade do |t|
    t.bigint "assessment_id", null: false
    t.integer "grades"
    t.string "feedback"
    t.string "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assessment_id"], name: "index_code_challenges_on_assessment_id"
  end

  create_table "interviewees", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "firstname"
    t.string "lastname"
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "invites", force: :cascade do |t|
    t.bigint "interviewee_id", null: false
    t.bigint "recruiter_id", null: false
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["interviewee_id"], name: "index_invites_on_interviewee_id"
    t.index ["recruiter_id"], name: "index_invites_on_recruiter_id"
  end

  create_table "questions", force: :cascade do |t|
    t.string "feedback"
    t.text "content"
    t.string "answer_1"
    t.string "answer_2"
    t.string "answer_3"
    t.string "answer_4"
    t.string "correct_answer"
    t.integer "assessment_id"
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
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "assessments", "interviewees"
  add_foreign_key "assessments", "recruiters"
  add_foreign_key "code_challenges", "assessments"
  add_foreign_key "invites", "interviewees"
  add_foreign_key "invites", "recruiters"
end
