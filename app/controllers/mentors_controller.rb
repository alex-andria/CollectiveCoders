class MentorsController < ApplicationController
    skip_before_action :authorize
    
    # non-user mentor controllers:
    def index
        render json: Mentor.all
    end

    def show_profile
        render json: find_mentor
    end


    # user mentor controllers:
    def create
        mentor = Mentor.create!(mentor_params)
        session[:mentor_id] = mentor.id
        render json: mentor, status: :created
    end

    def show
        mentor = Mentor.find_by(id: session[:mentor_id])
            if mentor
                render json: mentor
            else
                render json: {error: "Not authorized"}, status: :unauthorized
            end
    end

    def show_mentor_projects
        mentor = find_mentor
        render json: mentor, serializer: MentorWithProjectsSerializer
    end

    private

    # non-user
    def find_mentor
        Mentor.find(params[:id])
    end

    # user
    def mentor_params
        params.permit(:first_name, :last_name, :email_address, :password, :github_link, :linkedin_link, :skills, :password_confirmation)
    end


end
