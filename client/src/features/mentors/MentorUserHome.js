import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function MentorUserHome({ mentorUser }) {
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

  //Modal Variables
  // Get the modal
  let modal = document.getElementById("myModal");

  // Get the button that opens the modal
  let btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  return (
    <>
      <h1>Current Projects</h1>
      <div>
        Horizontal Project Info Here. Plus create new project.
        {mentorUser.projects ? (
          <>
            <ul>
              {mentorUser.projects.map((project) => (
                <li key={project.id}>{project.title}</li>
              ))}
            </ul>

            {/* create project */}
            <button
              id="myBtn"
              onClick={() => {
                modal.style.display = "block";
              }}
            >
              Create New Project
            </button>
            {/* <!-- The Modal --> */}
            <div id="myModal" className="modal">
              {/* <!-- Modal content --> */}
              <div className="modal-content">
                <span
                  className="close"
                  onClick={() => {
                    modal.style.display = "none";
                  }}
                >
                  &times;
                </span>
                <p>Some text in the Modal..</p>
              </div>
              {window.addEventListener("click", (e) => {
                if (e.target == modal) {
                  modal.style.display = "none";
                }
              })}
            </div>
          </>
        ) : (
          <>
            <p>No Projects</p>

            {/* create project */}
            <button
              id="myBtn"
              onClick={() => {
                modal.style.display = "block";
              }}
            >
              Create New Project
            </button>
            {/* <!-- The Modal --> */}
            <div id="myModal" className="modal">
              {/* <!-- Modal content --> */}
              <div className="modal-content">
                <span
                  className="close"
                  onClick={() => {
                    modal.style.display = "none";
                  }}
                >
                  &times;
                </span>
                <p>Some text in the Modal..</p>
              </div>
              {window.addEventListener("click", (e) => {
                if (e.target == modal) {
                  modal.style.display = "none";
                }
              })}
            </div>
          </>
        )}
      </div>

      <h1>Mentees</h1>
      <div>Mentee List From Projects Here.</div>
    </>
  );
}

export default MentorUserHome;
