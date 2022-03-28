import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import MentorList from "./MentorList";
import { fetchMentors } from "./mentorsSlice";

function Mentors({setMentorData}) {

  //redux attempt:
  // const mentors = useSelector((state) => state.mentors.entities);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMentors());
  // }, [dispatch]);

  const [mentors, setMentors] = useState([]);
  
  useEffect(() => {
    fetch("/mentors")
      .then((r) => r.json())
      .then(setMentors);
  }, []);

  return (
    <div className="App">
      <h1>Mentors Page</h1>
      <MentorList mentors={mentors} setMentorData={setMentorData} />
    </div>
  );
}

export default Mentors;