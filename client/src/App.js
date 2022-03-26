import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';
import Mentors from './features/mentors/Mentors';
import HomeAnonymous from './features/HomeAnonymous';
import { Navbar } from './app/Navbar';
import MentorInfo from './features/mentors/MentorInfo';


function App() {
  const [mentorInfo, setMentorInfo] = useState(null);

  return (
    <Router>
      <Navbar />
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <HomeAnonymous/>
          </Route>
          <Route path="/mentors">
            <Mentors/>
          </Route>
          <Route path="/mentors/:id">
            <MentorInfo mentorInfo={mentorInfo}/>
          </Route>
          {/* <Route exact path="/posts/:postId" component={SinglePostPage} /> */}
          {/* <Route exact path="/editPost/:postId" component={EditPostForm} /> */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
