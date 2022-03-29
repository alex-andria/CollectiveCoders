import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

//redux attempt:
// import {fetchMentorId} from "./mentorsSlice";

function MentorInfo({mentorData}){
    const history = useHistory()

    function handleBackButton(){
        history.push(`/`)
    }

    return(
        <div>
            <p>{mentorData.first_name}</p>
        </div>
    );
}

export default MentorInfo;