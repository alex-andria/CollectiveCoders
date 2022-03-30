Rails.application.routes.draw do
  
  resources :mentee_projects
  resources :mentor_projects
  resources :projects
  resources :mentees
  resources :mentors

  get "/mentees/all/:id", to: "mentees#show_profile"
  get "/mentors/all/:id", to: "mentors#show_profile"

  get "/mentors/projects/:id", to: "mentors#show_mentor_projects"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
