Rails.application.routes.draw do
  resources :questions
  post '/interviewee/:interviewee_id/question/:question_id/check_answer', to:"questions#checkanswer"

  resources :responses, only: [:create]
  get '/interviewee/:interviewee_id/responses', to: "responses#index"
  put '/recruiter/:recruiter_id/responses/:id', to: 'responses#update'

  resources :code_challenges

  resources :assessments
   # Assign question to assessment
   post '/assessments/:assessment_id/questions/:question_id', to: 'assessments#add_question'
   delete '/assessments/:assessment_id/questions/:question_id', to: 'assessments#remove_question'
 
   # Assign code challenge to assessment
   post '/assessments/:assessment_id/code_challenges/:code_challenge_id', to: 'assessments#add_code_challenge'
   delete '/assessments/:assessment_id/code_challenges/:code_challenge_id', to: 'assessments#remove_code_challenge'
   
  resources :invites, only: [:index,:destroy]
  post '/invites/:interviewee_id', to: 'invites#create'
  put '/invites/:interviewee_id/:id', to: 'invites#update'
  get '/interviewee/:interviewee_id/invites', to: "invites#index_interviewee_invites"
  get '/interviewee/:interviewee_id/invites/:id', to: "invites#show_interviewee_invite"

  put 'interviewees/:interviewee_id/invites/:id/accept_assessment', to: 'invites#accept_assessment', as: 'accept_interviewee_invite_path'

  put '/interviewees/:interviewee_id/invites/:id/deny', to: 'invites#accept', as: 'accept_interviewee_invite'
  # get '/interviewees/:interviewee_id/invites/:id/deny', to: 'invites#accept', as: 'deny_interviewee_invite'

  put '/interviewees/:interviewee_id/invites/:id/accept', to: 'invites#decline', as: 'deny_interviewee_invite'
  # get '/interviewees/:interviewee_id/invites/:id/accept', to: 'invites#accept', as: 'accept_interviewee_invite'

  resources :answers, only: [:create,:index,:show ]
  # get '/code_challenges/:code_challenge_id/answers', to: 'answers#index'
  # get '/code_challenges/:code_challenge_id/answers/:id', to: 'answers#show'
  put '/code_challenges/:code_challenge_id/answers/:id', to: 'answers#update'
  patch '/code_challenges/:code_challenge_id/answers/:id', to: 'answers#update'
  delete '/code_challenges/:code_challenge_id/answers/:id', to: 'answers#destroy'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #interviewee routes
  get '/interviewees/scores', to: "interviewees#sort_by_score"
  get '/interviewees', to: "interviewees#index"
  delete '/interviewee/logout', to: "interviewees#logout"
  post '/interviewee', to:"interviewees#register"
  post '/interviewee/login', to:"interviewees#login"
  post '/interviewee/reset', to:"interviewees#reset_password"
  get '/interviewee/:id', to:"interviewees#show"
  get '/interviewee/grades/:id', to: "interviewees#show_grades"
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
