import React, {useState, useEffect} from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './app/Navbar';
import HomeAnonymous from './features/HomeAnonymous';
import Mentors from './features/mentors/Mentors';
import Mentees from './features/mentees/Mentees';
import MentorInfo from './features/mentors/MentorInfo';
import MenteeInfo from './features/mentees/MenteeInfo';
import Projects from './features/projects/Projects';
import ProjectInfo from './features/projects/ProjectInfo';
import MentorUserHome from './features/mentors/MentorUserHome';


function App() {

  const [userMentor, setUserMentor] = useState(null); //user log-in mentor
  const [userMentee, setUserMentee] = useState(null); //user log-in mentee
  const [mentorData, setMentorData] = useState(null); //mentor individual data
  const [mentors, setMentors] = useState([]);         //mentors list
  const [menteeData, setMenteeData] = useState(null); //mentee individual data
  const [mentees, setMentees] = useState([]);         //mentees list
  const [projectData, setProjectData] = useState(null); //project individual data
  const [projects, setProjects] = useState([]);         //projects list
  
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

  return (
    <>
      <Navbar />
      <div className='App'>

        <main>
          <Switch>
            {/* mentor list & detail page */}
            <Route exact path="/mentors/:id">
              <MentorInfo mentorData={mentorData}/>
            </Route>
            <Route path="/mentors">
              <Mentors mentors={mentors} setMentorData={setMentorData}/>
            </Route>

            {/* mentee list & detail page */}
            <Route exact path="/mentees/:id">
              <MenteeInfo menteeData={menteeData}/>
            </Route>
            <Route path="/mentees">
              <Mentees mentees={mentees} setMenteeData={setMenteeData}/>
            </Route>

            {/* Project list & detail page */}
            <Route exact path="/projects/:id">
              <ProjectInfo projectData={projectData}/>
            </Route>
            <Route path="/projects">
              < Projects projects={projects} setProjectData={setProjectData}/>
            </Route>

            {/* homepage anonymous */}
            <Route exact path="/">
              <HomeAnonymous/>
              <MentorUserHome/>
            </Route>


            <Redirect to="/" />

          </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
