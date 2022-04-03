import React from "react";
import { useHistory } from "react-router-dom";

function ProjectList({ projects, setProjectData }) {
  const history = useHistory();

  return (
    <div className="grid-container">
      {projects.map((project) => (
        <div
          onClick={() => {
            const id = project.id;
            fetch(`/projects/${id}`)
              .then((res) => res.json())
              .then((data) => {
                setProjectData(data);
                history.push(`/projects/${id}`);
              });
          }}
          key={project.id}
        >
          <div
            className="flip-container"
          >
            <div className="flipper">
              <div className="front">
                {/* <!-- front content --> */}
                <img
                  src="https://picsum.photos/270/180/?random"
                  alt="Image alt text"
                />
                <div className="block-content">
                  <h3>4 Oct 2015</h3>
                  <h2>{project.title}</h2>
                  <div className="tag">Exhibition</div>
                  <div className="tag">Kids &amp; families</div>
                </div>
              </div>
              <div className="back">
                {/* <!-- back content --> */}
                <h3>In short</h3>
                <p>
                  Art for all explores art produced around the world by kids,
                  for kids. With guidance from some of the worlds most renowned
                  modern artists...
                </p>
                <a className="button" href="#">
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
