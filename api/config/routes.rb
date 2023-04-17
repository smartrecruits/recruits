Rails.application.routes.draw do
  # resources :interviewees
  # resources :recruiters
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #  get '/all', to:"users#index"
  delete '/interviewee/logout', to: "interviewees#logout"
  post '/interviewee', to:"interviewees#register"
  post '/interviewee/login', to:"interviewees#login"
  post '/interviewee/reset', to:"interviewees#reset_password"
  get 'interviewee/:id', to:"interviewees#show"
  #to delete a user 
 delete '/interviewee/delete/:id', to:"interviewees#delete_account" 
end
