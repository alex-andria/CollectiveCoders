import React from "react";
import UsersListBox from "../../styles/UsersListBox";
import { fetchMentorId } from "./mentorsSlice";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

function MentorList({mentors, setMentorData}) {

    //redux attempt:
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(fetchMentorId(mentorId));
    // }, []);
    
    const history = useHistory();

  return (
    <div>
        {mentors.map((mentor) => (
            <UsersListBox 
                onClick={() => {
                    const id = mentor.id;
                    //redux attempt
                    // dispatch(fetchMentorId(mentorId));
                    fetch(`/mentors/${id}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setMentorData(data);
                        history.push(`/mentors/${id}`)
                    });
                }}
                key={mentor.id} 
                > 
                    <br/>
                    {mentor.first_name}
                    <br/>
                    {mentor.last_name}
                    <br/>
            </UsersListBox>
        ))}
    </div>
  );
}

export default MentorList;
