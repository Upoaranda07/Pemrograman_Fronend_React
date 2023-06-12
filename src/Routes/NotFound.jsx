// TODO: answer here
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        // TODO: answer here 
        <>
            <h1>Page Not Found</h1>
            <p>The requested page does not exist.</p>
            <button onClick={() => navigate('/')}>Go to Home</button>
        </>

    );
};

export default NotFound;
