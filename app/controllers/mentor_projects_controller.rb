class MentorProjectsController < ApplicationController
    # temporary
    skip_before_action :authorize

    def create
        mentor_project = MentorProject.create!(mentor_project_params)
        render json: mentor_project.mentor, status: :created
    end

    def destroy
        mentor_project = find_mentor_project
        mentor_project.destroy
        head :no_content
    end

    private

    def find_mentor_project
        MentorProject.find(params[:id])
    end

    def mentor_project_params
        params.permit(:mentor_id, :project_id)
    end
end
