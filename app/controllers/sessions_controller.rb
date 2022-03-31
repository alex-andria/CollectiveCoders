class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    
     def create
      mentor = Mentor.find_by(email_address: params[:email_address])
      if mentor&.authenticate(params[:password])
        session[:mentor_id] = mentor.id
        render json: mentor
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
  
    def destroy
      session.delete :mentor_id
      head :no_content
    end

end
