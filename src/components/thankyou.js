import React from 'react';
import './thankyou.css';

export default function Thankyou (props){
    return(
        <div className="thankyou-container">
            <img src={require('../images/thankyou.png')} alt="intro-image" className="thankyouimg"/>
            <h1>Thankyou for trusting us</h1>
            <p>We will reach out to you soon.</p>
        </div>
    )
}
