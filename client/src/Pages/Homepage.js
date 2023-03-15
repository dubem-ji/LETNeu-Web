import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = () => {
    return (
        <div className='homepage'>
            <nav>
                <div className="brand">
                    <h4>The Neuro-Lab</h4>
                </div>
                <div className="links">
                    <h4><Link to='/research'>Research</Link></h4>
                    <h4><Link to='/project'>Project</Link></h4>
                </div>
            </nav>
            <div className='landing'>
                <div className="images">
                    
                </div>
            </div>
        </div>
    );
};

export default Homepage;