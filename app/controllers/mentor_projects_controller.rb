class MentorProjectsController < ApplicationController
    # temporary
    skip_before_action :authorize

    def create
        mentor_project = MentorProject.create!(mentor_project_params)
        render json: mentor_project.mentor, status: :created
    end

    private

    def mentor_project_params
        params.permit(:mentor_id, :project_id)
    end
end
