class MentorsController < ApplicationController
    
    def index
        render json: Mentor.all
    end

    def show
        render json: find_mentor
    end

    private

    def find_mentor
        Mentor.find(params[:id])
    end
end
