import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}