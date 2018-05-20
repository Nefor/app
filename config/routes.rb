Rails.application.routes.draw do
  root 'application#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :jobs_portal, path: '' do
    namespace :api, defaults: { format: 'json' } do
      namespace :v1 do
        resources :propositions
      end
    end
  end

  # match '*path' => 'application#index', via: [:get]
end
