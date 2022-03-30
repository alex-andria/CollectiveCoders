class MenteesController < ApplicationController

    def index
        render json: Mentee.all
    end

    def show_profile
        render json: find_mentee
    end

    private

    def find_mentee
        Mentee.find(params[:id])
    end


end
