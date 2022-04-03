import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";

function NewProject({ onAddProject, handleClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [errors, setErrors] = useState([]);


  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      title: title,
      description: description,
      skills: skills,
    };

    fetch("/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((project) => {
          setTitle("");
          setDescription("");
          setSkills("");
          setErrors([]);
          onAddProject(project);
          handleClose();
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* project attributes */}
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="skills">Skills/Languages</label>
        <input
          type="text"
          id="skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </div>
      {/* error handling */}
      {errors.map((err) => (
        <p key={err} style={{ color: "red" }}>
          {err}
        </p>
      ))}
      {/* submit button */}
      <hr />
      <Button variant="primary" type="submit" style={{float: "right"}}>
        Submit
      </Button>
      <Button variant="secondary" onClick={handleClose} style={{float: "right", marginRight: "10px"}}>
        Close
      </Button>
    </form>
  );
}

export default NewProject;
