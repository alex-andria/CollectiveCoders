class MentorsController < ApplicationController
    
    def index
        render json: Mentor.all
    end
end
