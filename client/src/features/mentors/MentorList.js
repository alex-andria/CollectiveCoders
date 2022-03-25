import React from "react";

function MentorList({ mentors = [] }) {
  return (
    <div>
        <ul>
        {mentors.map((mentor) => (
            <li key={mentor.id}> 
                <br/>
                {mentor.first_name}
                <br/>
                {mentor.last_name}
            </li>
        ))}
        </ul>
    </div>
  );
}

export default MentorList;
