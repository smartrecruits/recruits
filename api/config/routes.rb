Rails.application.routes.draw do
  resources :responses
  resources :code_challenges
  resources :assessments
  resources :invites, only: [:index,:destroy]
  post '/invites/:interviewee_id', to: 'invites#create'
  put '/invites/:interviewee_id/:id', to: 'invites#update'

  put 'interviewees/:interviewee_id/invites/:id/accept_assessment', to: 'invites#accept_assessment', as: 'accept_interviewee_invite_path'

  put '/interviewees/:interviewee_id/invites/:id/deny', to: 'invites#accept', as: 'accept_interviewee_invite'
  # get '/interviewees/:interviewee_id/invites/:id/deny', to: 'invites#accept', as: 'deny_interviewee_invite'

  put '/interviewees/:interviewee_id/invites/:id/accept', to: 'invites#decline', as: 'deny_interviewee_invite'
  # get '/interviewees/:interviewee_id/invites/:id/accept', to: 'invites#accept', as: 'accept_interviewee_invite'

  resources :answers, only: [:create]
  get '/questions/:question_id/answers', to: 'answers#index'
  get '/questions/:question_id/answers/:id', to: 'answers#show'
  put '/questions/:question_id/answers/:id', to: 'answers#update'
  patch '/questions/:question_id/answers/:id', to: 'answers#update'
  delete '/questions/:question_id/answers/:id', to: 'answers#destroy'

  resources :questions

  # Assign question to assessment
  post '/assessments/:assessment_id/questions/:question_id', to: 'assessments#add_question'
  delete '/assessments/:assessment_id/questions/:question_id', to: 'assessments#remove_question'

  # Assign code challenge to assessment
  post '/assessments/:assessment_id/code_challenges/:code_challenge_id', to: 'assessments#add_code_challenge'
  delete '/assessments/:assessment_id/code_challenges/:code_challenge_id', to: 'assessments#remove_code_challenge'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #  get '/all', to:"users#index"

  #interviewee routes
  get '/all', to: "interviewees#index"
  delete '/interviewee/logout', to: "interviewees#logout"
  post '/interviewee', to:"interviewees#register"
  post '/interviewee/login', to:"interviewees#login"
  post '/interviewee/reset', to:"interviewees#reset_password"
  get 'interviewee/:id', to:"interviewees#show"
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
