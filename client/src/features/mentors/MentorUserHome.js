import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NewProject from "../projects/NewProject";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function MentorUserHome({ mentorUser, onAddProject }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h1>Current Projects</h1>
      <div>
        Horizontal Project Info Here. Plus create new project.

        {mentorUser.projects ? (
            <ul>
              {mentorUser.projects.map((project) => (
                <li key={project.id}>{project.title}</li>
              ))}
            </ul>
        ) : (
          <p>No Projects</p>
        )}

        <Button variant="primary" onClick={handleShow}>
          Create New Project
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewProject
              onAddProject={onAddProject}
              mentorUser={mentorUser}
              handleClose={handleClose}
            />
          </Modal.Body>
        </Modal>
      </div>

      <h1>Mentees</h1>
      <div>Mentee List From Projects Here.</div>
    </>
  );
}

export default MentorUserHome;
