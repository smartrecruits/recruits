Rails.application.routes.draw do
  resources :assessments_code_challenges ,only: [:create,:index,:show,:destroy]
  resources :assessments_questions, only: [:create,:index,:show,:destroy]
  resources :questions
  resources :code_challenges

  post '/interviewee/:interviewee_id/question/:question_id/check_answer', to:"questions#check_answer"

  resources :responses, only: [:create]
  get '/interviewee/:interviewee_id/responses', to: "responses#index"
  put '/recruiter/:recruiter_id/responses/:id', to: 'responses#update'
  patch '/recruiter/:recruiter_id/responses/:id', to: 'responses#update'

  resources :assessments
  get '/assessments/done', to:"assessments#index_completed"

  resources :invites, only: [:index,:destroy]
  post '/invites/:interviewee_id', to: 'invites#create'
  put '/invites/:interviewee_id/:id', to: 'invites#update'
  get '/interviewee/:interviewee_id/invites', to: "invites#index_interviewee_invites"
  get '/interviewee/:interviewee_id/invites/:id', to: "invites#show_interviewee_invite"

  put 'interviewees/:interviewee_id/invites/:id/accept_assessment', to: 'invites#accept_assessment'

  resources :answers, only: [:create,:show,:destroy ]
  get '/interviewee/:interviewee_id/answers', to: 'answers#index'
  put '/recruiter/:recruiter_id/answers/:id', to: 'answers#update'
  patch '/recruiter/:recruiter_id/answers/:id', to: 'answers#update'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #interviewee routes
  get '/interviewees/:interviewee_id/assessment/:assessment_id/answers', to: "interviewees#show_answers"
  get '/interviewees/:interviewee_id/assessment/:assessment_id/responses', to: "interviewees#show_responses"
  get '/interviewees/scores', to: "interviewees#sort_by_score"
  get '/interviewees', to: "interviewees#index"
  delete '/interviewee/logout', to: "interviewees#logout"
  post '/interviewee', to:"interviewees#register"
  post '/interviewee/login', to:"interviewees#login"
  post '/interviewee/reset', to:"interviewees#reset_password"
  get '/interviewee/:id', to:"interviewees#show"
  get '/interviewee/grades/:id', to: "interviewees#show_grades"
  get '/interviewees/completed', to: "interviewees#completed_assessments"
  #to delete a user 
 delete '/interviewee/delete/:id', to:"interviewees#delete_account" 

 #recruiter routes
 delete '/recruiter/logout', to: "recruiters#logout"
 post '/recruiter', to:"recruiters#register"
 post '/recruiter/login', to:"recruiters#login"
 post '/recruiter/reset', to:"recruiters#reset_password"
 get 'recruiter/:id', to:"recruiters#show"
 #to delete a user 
delete '/recruiter/delete/:id', to:"recruiters#delete_account" 
end
