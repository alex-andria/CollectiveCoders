import React, {useState, useEffect} from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import Mentors from './features/mentors/Mentors';
import HomeAnonymous from './features/HomeAnonymous';
import { Navbar } from './app/Navbar';
import MentorInfo from './features/mentors/MentorInfo';


function App() {

  const [userMentor, setUserMentor] = useState(null); //user log-in mentor
  const [userMentee, setUserMentee] = useState(null); //user log-in mentee
  const [mentorData, setMentorData] = useState(null); //mentor individual data
  const [mentors, setMentors] = useState([]);         //mentor list
  
  useEffect(() => {
    fetch("/mentors")
      .then((r) => r.json())
      .then(setMentors);
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

            {/* homepage anonymous */}
            <Route exact path="/">
              <HomeAnonymous/>
            </Route>


            <Redirect to="/" />

          </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
