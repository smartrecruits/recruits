Rails.application.routes.draw do


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
end
