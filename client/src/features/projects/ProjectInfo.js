import React from "react";
import { useHistory } from "react-router-dom";

function ProjectInfo({projectData}){
    const history = useHistory()

    function handleBackButton(){
        history.push(`/`)
    }

    return(
        <div>
            <p>{projectData.title}</p>
        </div>
    );
}

export default ProjectInfo;