import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MentorList from "./MentorList";
import { fetchMentors } from "./mentorsSlice";

function Mentors() {
  const mentors = useSelector((state) => state.mentors.entities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMentors());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Mentors Page</h1>
      <MentorList mentors={mentors} />
    </div>
  );
}

export default Mentors;