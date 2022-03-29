import React from "react";
import { useHistory } from "react-router-dom";

function MenteeInfo({menteeData}){
    const history = useHistory()

    function handleBackButton(){
        history.push(`/`)
    }

    return(
        <div>
            <p>{menteeData.first_name}</p>
        </div>
    );
}

export default MenteeInfo;