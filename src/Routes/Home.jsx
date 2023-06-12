import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Welcome to Student Portal</h2>
            <Link to="/student" data-testid="student-btn">
                <button>All Student</button>
            </Link>
        </div>
    );
};

export default Home;