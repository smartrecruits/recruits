
require "test_helper"
require 'jwt'

class IntervieweesControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  # def setup
  #   @interviewee = Interviewee.create(
  #     username: "testuser",
  #     email: "test@example.com",
  #     password: "password",
  #     bio: "Test bio",
  #     firstname: "Test",
  #     lastname: "User"
  #   )
  # end

  # test "should register interviewee" do
  #   post '/interviewee', params: { username: "newuser", email: "newuser@example.com", password: "password", bio: "New bio", firstname: "New", lastname: "User" }
  #   assert_response :created
  #   assert_not_nil response.parsed_body
   
  # end

  # test "should login interviewee with valid credentials" do
  #   post '/interviewee/login', params: { email: @interviewee.email, password: "password" }
  #   assert_response :success
  #   assert_not_nil response.parsed_body["user"]["id"]
  #   assert_not_nil response.parsed_body["token"]
  # end

  # test "should not login interviewee with invalid credentials" do
  #   post '/interviewee/login', params: { email: @interviewee.email, password: "wrongpassword" }
  #   assert_response :unauthorized
  #   assert_equal "invalid username or password", response.parsed_body["errors"]
  # end

  # test "should delete interviewee account" do
  #   assert_difference('Interviewee.count', -1) do
  #     delete "/interviewee/delete/#{@interviewee.id}"
  #   end
  #   assert_response :no_content
  # end

  # test "should show interviewee" do
  #   get "/interviewee/#{@interviewee.id}"
  #   assert_response :success
  #   assert_equal @interviewee.id, response.parsed_body["id"]
  # end

  # test "should reset interviewee password with valid email" do
  #   post '/interviewee/reset', params: { email: @interviewee.email, new_password: "newpassword" }
  #   assert_response :success
  #   assert_equal "Password reset successful", response.parsed_body["message"]
  # end

  # test "should not reset interviewee password with invalid email" do
  #   post '/interviewee/reset', params: { email: "invalid@example.com", new_password: "newpassword" }
  #   assert_response :not_found
  #   assert_equal "Email not found", response.parsed_body["errors"]
  # end

end