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
            class="flip-container"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="flipper">
              <div class="front">
                {/* <!-- front content --> */}
                <img
                  src="https://picsum.photos/270/180/?random"
                  alt="Image alt text"
                />
                <div class="block-content">
                  <h3>4 Oct 2015</h3>
                  <h2>Art for all lorem ipsum very long title</h2>
                  <div class="tag">Exhibition</div>
                  <div class="tag">Kids &amp; families</div>
                </div>
              </div>
              <div class="back">
                {/* <!-- back content --> */}
                <h3>In short</h3>
                <p>
                  Art for all explores art produced around the world by kids,
                  for kids. With guidance from some of the worlds most renowned
                  modern artists...
                </p>
                <a class="button" href="#">
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
