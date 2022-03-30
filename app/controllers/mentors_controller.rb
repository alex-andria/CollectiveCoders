class MentorsController < ApplicationController
    
    def index
        render json: Mentor.all
    end

    def show_profile
        render json: find_mentor
    end

    # user mentor controllers:

    def create
    end

    def show_mentor_projects
        mentor = find_mentor
        render json: mentor, serializer: MentorWithProjectsSerializer
    end

    private

    def find_mentor
        Mentor.find(params[:id])
    end
end
