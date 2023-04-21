require "test_helper"
require 'jwt'

class RecruitersControllerTest < ActionDispatch::IntegrationTest
  # def setup
  #   @recruiter = Recruiter.create(
  #     username: "testuser",
  #     email: "test@example.com",
  #     password: "password",
  #     company: "Test company",
  #     firstname: "Test",
  #     lastname: "User"
  #   )
  # end

  # test "should register recruiiter" do
  #   post '/recruiter', params: { username: "newuser", email: "newuser@example.com", password: "password", company: "New company", firstname: "New", lastname: "User" }
  #   assert_response :created
  #   assert_not_nil response.parsed_body
   
  # end

  # test "should login recruiter with valid credentials" do
  #   post '/recruiter/login', params: { email: @recruiter.email, password: "password" }
  #   assert_response :success
  #   assert_not_nil response.parsed_body["user"]["id"]
  #   assert_not_nil response.parsed_body["token"]
  # end

  # test "should not login recruiter with invalid credentials" do
  #   post '/recruiter/login', params: { email: @recruiter.email, password: "wrongpassword" }
  #   assert_response :unauthorized
  #   assert_equal "invalid username or password", response.parsed_body["errors"]
  # end

  # test "should delete recruiter account" do
  #   assert_difference('Recruiter.count', -1) do
  #     delete "/recruiter/delete/#{@recruiter.id}"
  #   end
  #   assert_response :no_content
  # end

  # test "should show recruiter" do
  #   get "/recruiter/#{@recruiter.id}"
  #   assert_response :success
  #   assert_equal @recruiter.id, response.parsed_body['id']
  # end

  # test "should reset recruiter password with valid email" do
  #   post '/recruiter/reset', params: { email: @recruiter.email, new_password: "newpassword" }
  #   assert_response :success
  #   assert_equal "Password reset successful", response.parsed_body["message"]
  # end

  # test "should not reset recruiter password with invalid email" do
  #   post '/recruiter/reset', params: { email: "invalid@example.com", new_password: "newpassword" }
  #   assert_response :not_found
  #   assert_equal "Email not found", response.parsed_body["errors"]
  # end
end