import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = () => {
    return (
        <div className='homepage'>
        <Link to='/research'>Research</Link>
        <Link to='/project'>Project</Link>
        </div>
    );
};

export default Homepage;