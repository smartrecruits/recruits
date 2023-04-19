Rails.application.routes.draw do
  resources :invites

  resources :answers, only: [:create]
  get '/questions/:question_id/answers', to: 'answers#index'
  get '/questions/:question_id/answers/:id', to: 'answers#show'
  put '/questions/:question_id/answers/:id', to: 'answers#update'
  patch '/questions/:question_id/answers/:id', to: 'answers#update'
  delete '/questions/:question_id/answers/:id', to: 'answers#destroy'


  get '/questions', to: 'questions#index'
  get '/questions/:id', to: 'questions#show'
  post '/questions', to: 'questions#create'
  patch '/questions/:id', to: 'questions#update'
  delete '/questions/:id', to: 'questions#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #  get '/all', to:"users#index"

  #interviewee routes
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
