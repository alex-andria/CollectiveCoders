import React from "react";
import {useEffect, useState} from "react";
import { useParams } from "react-router";

function MentorUserHome({mentorUser}){
    // const [{ data: mentor, error, status }, setMentor] = useState({
    //     data: null,
    //     error: null,
    //     status: "pending",
    //   });

    //   const { id } = useParams();

    // useEffect(() => {
    //     fetch(`/mentors/projects/${id}`).then((r) => {
    //       if (r.ok) {
    //         r.json().then((camper) =>
    //           setCamper({ data: camper, error: null, status: "resolved" })
    //         );
    //       } else {
    //         r.json().then((err) =>
    //           setCamper({ data: null, error: err.error, status: "rejected" })
    //         );
    //       }
    //     });
    //   }, [id]);
    // const [mentorUserProjects, setMentorUserProjects] = useState(null);
    // const { id } = useParams();



    // useEffect(() => {
    //     fetch(`/mentors/projects/${mentorUser.id}`)
    //     .then(response => response.json())
    //     .then((data) => setMentorUserProjects(data))
    //     }, []);

    console.log(mentorUser);

    return(
        <>
            <h1>Current Projects</h1>
            <div>
                Horizontal Project Info Here. Plus create new project.
                {mentorUser.projects ?
                    <ul>
                    {mentorUser.projects.map((project) => (
                    <li key={project.id}>
                        {project.title}
                    </li>
                    ))}
                    </ul>            
                    :
                    <p>No Projects</p>
                }     
            </div>

            
            <h1>Mentees</h1>
            <div>
                Mentee List From Projects Here.
            </div>
        </>
    )
}

export default MentorUserHome;