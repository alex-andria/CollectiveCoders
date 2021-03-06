import React from "react";
import { useHistory } from "react-router-dom";

function MenteeList({ mentees, setMenteeData }) {

  const history = useHistory();

  return (
    <div className="grid-container">
      {mentees.map((mentee) => (
        <div
          onClick={() => {
            const id = mentee.id;
            fetch(`/mentees/all/${id}`)
              .then((res) => res.json())
              .then((data) => {
                setMenteeData(data);
                history.push(`/mentees/all/${id}`);
              });
          }}
          key={mentee.id}
        >
          <div className="card">
            <div className="additional">
              <div className="user-card">
                {/* <div className="level center">
                            Level 13
                            </div> */}
                <div className="points center">5,312 Points</div>
                <div className="circular--portrait">
                  <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" />
                </div>
              </div>
              <div className="more-info">
                <h1>
                  {mentee.first_name} {mentee.last_name}
                </h1>
                <div className="coords">
                  <span>Group Name</span>
                  <span>Joined January 2019</span>
                </div>
                <div className="coords">
                  <span>Position/Role</span>
                  <span>City, Country</span>
                </div>
                <div className="stats">
                  <div>
                    <div className="title">Hearts</div>
                    <i className="fa fa-trophy"></i>
                    <div className="value">2</div>
                  </div>
                  <div>
                    <div className="title">Projects</div>
                    <i className="fa fa-gamepad"></i>
                    <div className="value">27</div>
                  </div>
                  <div>
                    <div className="title">Reviews</div>
                    <i className="fa fa-group"></i>
                    <div className="value">123</div>
                  </div>
                  {/* <div>
                                <div className="title">Coffee</div>
                                <i className="fa fa-coffee"></i>
                                <div className="value infinity">???</div>
                            </div> */}
                </div>
              </div>
            </div>
            <div className="general">
              <h1>
                {mentee.first_name} {mentee.last_name}
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                volutpat mauris, at molestie lacus. Nam vestibulum sodales odio
                ut pulvinar.
              </p>
              <span className="more">Mouse over the card for more info</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenteeList;
