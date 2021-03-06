Rails.application.routes.draw do
  root 'static_pages#home'

  get 'static_pages/home'

  get 'static_pages/about_us'

  get 'static_pages/leadership'

  get 'static_pages/principles'

  get 'static_pages/action'

  get 'static_pages/studies'

  get 'static_pages/resources'

  get 'static_pages/partners'

  get 'static_pages/press_release'

  get 'static_pages/news'

  get 'static_pages/pdf' => "static_pages#pdf", as: "pdf"

  post 'static_pages/new_user' => "static_pages#new_user", as: "new_user"

  get "fiduciaryguide" => "static_pages#fiduciary_guide", as: "fiduciaryguide"

  #
  # Home
  # Background
  # -one pager
  # About
  # -staff and hc
  # Principles
  # -statement of principles
  # Action
  # -illustrative metrics
  # Studies
  # -links
  # Directory
  # -form



  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"


  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
