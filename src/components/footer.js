import React from 'react';
import './footer.css';

export default function Footer(props){
    return(
        <div className="footer-completed">
        <div className="percentage-completed">
        <div>10% completed</div>
        <div className="bar-completed"><div className="progress"></div></div>
        </div>
        </div>
        );
}

