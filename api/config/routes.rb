Rails.application.routes.draw do
  resources :assessments
  resources :recruiters
  resources :interviewees
  resources :answers
  resources :questions
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
