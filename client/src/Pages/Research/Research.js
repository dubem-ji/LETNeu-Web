import React from 'react';
import { Link } from 'react-router-dom';

import p2 from '../../Components/images/pub-cards/p2.JPG';
import p3 from '../../Components/images/pub-cards/p3.JPG';
import p4 from '../../Components/images/pub-cards/p4.JPG';
import p5 from '../../Components/images/pub-cards/p5.JPG';

const Research = () => {
    return (
        <div className='publications'>
            <div className="scroll">
                <div className="cards">
                    <div className="item" id='item-one'>
                    </div>
                    <div className="item" id='item-two'>
                        <img src={p2} alt="" />
                    </div>
                    <div className="item" id='item-three'>
                        <img src={p3} alt="" />
                    </div>
                    <div className="item" id='item-four'>
                        <img src={p4} alt="" />
                    </div>
                    <div className="item" id="item-five">
                        <img src={p5} alt="" />
                    </div>
                    <div className="item" id='item-two'>
                        <img src={p2} alt="" />
                    </div>
                    <div className="item" id='item-three'>
                        <img src={p3} alt="" />
                    </div>
                    <div className="item" id='item-four'>
                        <img src={p4} alt="" />
                    </div>
                    <div className="item" id="item-five">
                        <img src={p5} alt="" />
                    </div>
                    <div className="item" id='item-two'>
                        <img src={p2} alt="" />
                    </div>
                    <div className="item" id='item-three'>
                        <img src={p3} alt="" />
                    </div>
                    <div className="item" id='item-four'>
                        <img src={p4} alt="" />
                    </div>
                    <div className="item" id="item-five">
                        <img src={p5} alt="" />
                    </div>
                </div>
                <div className="card">
                    <div className="item" id='item-one'>
                        <img src={p2} alt="" />
                    </div>
                    <div className="item" id='item-two'></div>
                    <div className="item" id='item-three'></div>
                    <div className="item" id='item-four'></div>
                    <div className="item" id="item-five"></div>
                </div>
            </div>

            <nav className="navs">

                <div className="links">
                    <h4><Link to='/'>HOME</Link></h4>
                    <h4><Link to='/project'>PROJECTS</Link></h4>
                </div>
                <div className="display-options">
                    <h4>OVERVIEW</h4>
                    <h4>SELECTED</h4>
                </div>
            </nav>

        </div>
    );
};

export default Research;