import React from "react";
import ProjectList from "./ProjectList";

function Projects({projects, setProjectData}) {

  return (
    <div className="App">
      <h1>Project Page</h1>
      <ProjectList projects={projects} setProjectData={setProjectData} />
    </div>
  );
}

export default Projects;