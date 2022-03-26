import React from "react";
import UsersListBox from "../../styles/UsersListBox";
import styled from "styled-components";

function MentorList({ mentors = [] }) {
  return (
    <div>
        {mentors.map((mentor) => (
            <UsersListBox 
                // onClick={() => {
                // const id = mentor.id;
                // fetch(`/mentors/${id}`)
                // .then((response) => response.json())
                // .then(
                //     // (data) => {
                //     // setMentorInfo(data);
                //     // history.push(`/mentors/${id}`)
                //     // }
                //     );
                // }}
                key={mentor.id} 
                > 
                    <br/>
                    {mentor.first_name}
                    <br/>
                    {mentor.last_name}
                    <br/>
                    <button></button>
            </UsersListBox>
        ))}
    </div>
  );
}

export default MentorList;
