class ProjectsController < ApplicationController
    # temporary
    skip_before_action :authorize

    def index
        render json: Project.all
    end

    def show
        render json: find_project
    end

    def create
        project = Project.create!(project_params)
        render json: project, status: :created
    end

    def destroy
        project = find_project
        project.destroy
        head :no_content
    end

    private

    def find_project
        Project.find(params[:id])
    end

    def project_params
        params.permit(:id, :title, :description, :skills)
    end

end
