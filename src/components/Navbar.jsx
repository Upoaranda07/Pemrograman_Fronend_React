import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <h1 data-testid="home-page">
                    <Link to="/student" data-testid="student-btn">
                        Student Portal
                    </Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/student" data-testid="student-page">
                            <button>All Student</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/add" data-testid="add-page">
                            <button>Add Student</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;