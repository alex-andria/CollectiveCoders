import React, {useEffect, useState} from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import Mentors from './features/mentors/Mentors';
import HomeAnonymous from './features/HomeAnonymous';
import { Navbar } from './app/Navbar';
import MentorInfo from './features/mentors/MentorInfo';


function App() {
  const [mentorData, setMentorData] = useState(null);
  // console.log(mentorData);

  return (
    <>
      <Navbar />
      <div className='App'>

        <main>
          <Switch>
            <Route exact path="/mentors/:id">
              <MentorInfo mentorData={mentorData}/>
            </Route>
            <Route path="/mentors">
              <Mentors setMentorData={setMentorData}/>
            </Route>
            
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
