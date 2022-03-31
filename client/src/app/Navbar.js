import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({setMentorUser}) => {

    function handleLogOut(){
        fetch("/logout",
        {method: "DELETE"})
        .then((response) => {
            if (response.ok) {
                setMentorUser(null);
            }
        });
    }

    return (
        <nav>
            <section>
                <h1>Collective Coders</h1>

                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/">Home</Link>
                        <Link to="/mentors">Mentors</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/mentees">Mentees</Link>
                        <Link to="/" onClick={handleLogOut}>Logout</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}