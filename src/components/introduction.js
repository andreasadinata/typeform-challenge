import React from 'react';
import {connect} from 'react-redux';

export function Introduction (props){
    return(
        <section className="introduction">
            <img src="../images/intro-image.png" alt="introduction-image">
            <h1>Branding Questionnaire</h1>
            <p>Let us capture your vision and values so we can help you build a vibrant brand identity.</p>
            <div className="start">Start</div>
        </section>
    )
}
