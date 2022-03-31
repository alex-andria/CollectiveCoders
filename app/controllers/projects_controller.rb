class ProjectsController < ApplicationController
    # temporary
    skip_before_action :authorize

    def index
        render json: Project.all
    end

    def show
        render json: find_project
    end

    private

    def find_project
        Project.find(params[:id])
    end

end
