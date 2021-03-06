import React, {useState, useEffect} from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './app/Navbar';
import { useHistory } from 'react-router-dom';
import HomeAnonymous from './features/HomeAnonymous';
// import LoginForm from './features/LoginForm';
// import SignupForm from './features/SignupForm';
import Mentors from './features/mentors/Mentors';
import Mentees from './features/mentees/Mentees';
import MentorInfo from './features/mentors/MentorInfo';
import MenteeInfo from './features/mentees/MenteeInfo';
import Projects from './features/projects/Projects';
import ProjectInfo from './features/projects/ProjectInfo';
import MentorUserHome from './features/mentors/MentorUserHome';


function App() {

  const [mentorData, setMentorData] = useState(null); //mentor individual data
  const [mentors, setMentors] = useState([]);         //mentors list
  const [menteeData, setMenteeData] = useState(null); //mentee individual data
  const [mentees, setMentees] = useState([]);         //mentees list
  const [projectData, setProjectData] = useState(null); //project individual data
  const [projects, setProjects] = useState([]);         //projects list

  // user auth
  const [mentorUser, setMentorUser] = useState(null); //user log-in mentor

  //useHistory
  const history = useHistory();

  useEffect(() => {
    //auto-login
    fetch("/mentor/me")
    .then((response) => {
      if (response.ok) {
        response.json()
        .then((mentorUser) => setMentorUser(mentorUser));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/mentors")
      .then((r) => r.json())
      .then(setMentors);
  }, []);

  useEffect(() => {
    fetch("/mentees")
      .then((r) => r.json())
      .then(setMentees);
  }, []);

  useEffect(() => {
    fetch("/projects")
      .then((r) => r.json())
      .then(setProjects);
  }, []);

  function handleAddProject(NewProject) {
    setProjects((projects) => [...projects, NewProject]);
  }

  function handleDeleteProject(id) {

    fetch(`/projects/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setProjects((projects) =>
         projects.filter((project) => project.id !== id)
        );
      }
    });
  }

  // function handleAddMentorProject(newMentorProject) {
  //   setMentorUser({
  //     // error,
  //     // status,
  //     data: {
  //       ...mentorUser,
  //       projects: [...mentorUser.projects, newMentorProject],
  //     },
  //   });
  // }

  if (!mentorUser) return <HomeAnonymous onLogin={setMentorUser} />;
  
  return (
    <>
      <Navbar setMentorUser={setMentorUser}/>
      <div className='App'>

        <main>
          <Switch>

            {/* mentor list & detail page */}
            <Route exact path="/mentors/all/:id">
              <MentorInfo mentorData={mentorData}/>
            </Route>
            <Route exact path="/mentors">
              <Mentors mentors={mentors} setMentorData={setMentorData}/>
            </Route>

            {/* mentee list & detail page */}
            <Route exact path="/mentees/all/:id">
              <MenteeInfo menteeData={menteeData}/>
            </Route>
            <Route exact path="/mentees">
              <Mentees mentees={mentees} setMenteeData={setMenteeData}/>
            </Route>

            {/* Project list & detail page */}
            <Route exact path="/projects/:id">
              <ProjectInfo projectData={projectData}/>
            </Route>
            <Route exact path="/projects">
              < Projects projects={projects} setProjectData={setProjectData}/>
            </Route>

            {/* homepage user */}
            <Route exact path="/">
              <MentorUserHome 
                mentorUser={mentorUser} 
                onAddProject={handleAddProject}
                onDeleteProject={handleDeleteProject}
                // handleAddMentorProject={handleAddMentorProject}
                />
            </Route>
            

            <Redirect to="/" />

          </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
