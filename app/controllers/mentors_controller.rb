class MentorsController < ApplicationController
    
    def index
        render json: Mentor.all
    end

    def show
        mentor = Mentor.find(params[:id])
        render json: mentor
    end

    private

    def find_mentor
        Mentor.find(params[:id])
    end
end
